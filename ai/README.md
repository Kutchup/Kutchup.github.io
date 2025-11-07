# AI Frontend Setup

This directory contains the AI frontend application that uses Auth0 for authentication and Vercel serverless functions to interact with an AI API.

## Project Structure

```
/
├── ai/
│   ├── index.html          # AI frontend UI
│   └── README.md           # This file
├── api/                     # Vercel serverless functions (root level)
│   ├── config.js           # Returns Auth0 config
│   └── ai.js               # AI API proxy
└── vercel.json             # Vercel configuration
```

## Setup Instructions

### 1. Auth0 Configuration

1. Go to [https://auth0.com](https://auth0.com) and create a tenant if you don't have one
2. Create a new Application (choose "Single Page Application")
3. In the Application settings, configure:
   - **Allowed Callback URLs**: 
     - Production: `https://<your-domain>/ai/`
     - Local testing: `http://localhost:3000/ai/`
   - **Allowed Logout URLs**: 
     - Production: `https://<your-domain>/ai/`
     - Local testing: `http://localhost:3000/ai/`
   - **Allowed Web Origins**: 
     - Production: `https://<your-domain>`
     - Local testing: `http://localhost:3000`
4. Copy your:
   - Domain (e.g., `dev-xyz.auth0.com`)
   - Client ID

### 2. Vercel Environment Variables

In your Vercel project settings, add these environment variables:

- `AUTH0_DOMAIN` = Your Auth0 domain (e.g., `dev-xyz.auth0.com`)
- `AUTH0_CLIENT_ID` = Your Auth0 client ID
- `AI_API_KEY` = Your AI provider API key (Google Gemini API key)
- `AI_MODEL` = (Optional) AI model to use (default: `gemini-2.5-flash`)

**Important:** Never commit these values to the repository!

### 3. Deploy to Vercel

1. Push this repository to GitHub
2. Import the repository in Vercel dashboard
3. Ensure environment variables are set in Vercel project settings
4. Deploy!

## API Endpoints

The serverless functions are located in the `/api` directory at the project root.

### `/api/config` (GET)
Returns the public Auth0 configuration needed by the frontend:
```json
{
  "AUTH0_DOMAIN": "dev-xyz.auth0.com",
  "AUTH0_CLIENT_ID": "your-client-id"
}
```

### `/api/ai` (POST)
Accepts AI prompts from authenticated users:

**Request:**
```json
{
  "prompt": "Your question here"
}
```

**Headers:**
```
Authorization: ******
```

**Response:**
```json
{
  "result": "AI generated response"
}
```

## Local Development

To test locally:

1. Install Vercel CLI: `npm install -g vercel`
2. Run `vercel dev` in the project root
3. Set up local environment variables in `.env` (not committed)
4. Access the app at `http://localhost:3000/ai/`

## Vercel Configuration

The `vercel.json` file at the project root configures:
- Serverless function settings (memory, timeout)
- Functions are automatically routed from `/api/*` paths

## Security Notes

- The AI API key is never exposed to the client
- All API calls are authenticated via Auth0
- Tokens are validated server-side (implement JWT verification for production)
- Rate limiting should be implemented for production use

## Troubleshooting

### "Could not fetch config" Error
- Ensure `AUTH0_DOMAIN` and `AUTH0_CLIENT_ID` are set in Vercel environment variables
- Check that `/api/config` endpoint is accessible

### "Unmatched function pattern" Error
- Ensure API files are in `/api/` directory at project root
- Check `vercel.json` uses correct pattern: `"api/*.js"`

### Authentication Loop
- Verify Auth0 callback URLs match your deployment domain
- Clear browser cache and localStorage
- Check browser console for specific errors

### AI Response Errors
- Verify `AI_API_KEY` is set correctly in Vercel
- Check API key has proper permissions
- Review Vercel function logs for detailed errors
