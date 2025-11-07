module.exports = (req, res) => {
  const domain = process.env.AUTH0_DOMAIN || '';
  const clientId = process.env.AUTH0_CLIENT_ID || '';

  if (!domain || !clientId) {
    return res.status(500).json({
      error: 'AUTH0_DOMAIN and AUTH0_CLIENT_ID must be configured in Vercel environment variables.'
    });
  }

  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(JSON.stringify({
    AUTH0_DOMAIN: domain,
    AUTH0_CLIENT_ID: clientId
  }));
};