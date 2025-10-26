// Request: POST /api/ai  { "prompt": "..." }
// Headers: Authorization: Bearer <id_token_or_access_token-from-auth0>
//
// Response: { "result": "AI generated text..." }

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateText';

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
    const resp = await fetch(GEMINI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 800,
        temperature: 0.7
      })
    });

    if (!resp.ok) {
      const errText = await resp.text();
      console.error('OpenAI error', resp.status, errText);
      return res.status(502).json({ error: 'AI provider returned an error', details: errText });
    }

    const data = await resp.json();

    // Extract a clean assistant text if present
    let assistantText = '';
    try {
      assistantText = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
    } catch (e) {
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