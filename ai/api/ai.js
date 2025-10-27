// Request: POST /api/ai  { "prompt": "..." }
// Headers: Authorization: Bearer <id_token_or_access_token-from-auth0>
//
// Response: { "result": "AI generated text..." }

// Note: This is for the Gemini API, not OpenAI.
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Basic auth guard: require Authorization header from client (sent by client via getTokenSilently())
  const authHeader = req.headers['authorization'] || req.headers['Authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Missing Authorization header. Please log in.' });
  }

  const body = req.body;
  let prompt = (body && body.prompt) || '';
  if (!prompt) {
    return res.status(400).json({ error: 'Missing prompt in request body.' });
  }

  const apiKey = process.env.AI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'AI_API_KEY not configured in environment variables.' });
  }

  const model = process.env.AI_MODEL || 'gemini-2.5-flash';

  try {
    const resp = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          maxOutputTokens: 800,
          temperature: 0.7,
        }
      })
    });

    if (!resp.ok) {
      const errText = await resp.text();
      console.error('Gemini API error', resp.status, errText);
      return res.status(502).json({ error: 'AI provider returned an error', details: errText });
    }

    const data = await resp.json();

    // Extract a clean assistant text if present
    let assistantText = '';
    try {
      assistantText = data.candidates[0].content.parts[0].text;
    } catch (e) {
      // It's fine if we can't extract text, we'll return the full response below.
      assistantText = '';
    }

    // If there's no assistantText, return full provider response
    if (!assistantText) {
      return res.status(200).json({ result: data });
    }

    return res.status(200).json({ result: assistantText });
  } catch (err) {
    console.error('Server error while calling AI provider', err);
    return res.status(500).json({ error: 'Server error', details: err.message });
  }
};