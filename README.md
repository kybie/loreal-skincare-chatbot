# L'Oréal Skin Care Assistant Chatbot

An AI-powered chatbot that helps consumers explore L'Oréal's skincare products, built with OpenAI and secured via Cloudflare Worker.

## Project Structure

```
loreal-skincare-chatbot/
├── index.html          # Main HTML structure
├── style.css           # L'Oréal branded styling
├── script.js           # Chat logic + conversation history
├── secrets.js         # Placeholder for local dev (API key goes here temporarily)
├── cloudflare-worker.js # Cloudflare Worker script (SECURE - keeps key hidden)
└── README.md          # This file
```

## Features

### Core (Required)
- ✅ L'Oréal branding (logo, brand colors)
- ✅ System prompt keeps AI on-topic for skincare
- ✅ User input captured and sent to OpenAI via Cloudflare Worker
- ✅ Response displayed on page
- ✅ API key protected behind Cloudflare Worker

### LevelUp Bonus Features
- ✅ Conversation history maintained across messages
- ✅ User question displayed above each AI response
- ✅ Chat bubble UI with distinct styling (user vs assistant)

## Setup Instructions

### Step 1: Deploy Cloudflare Worker
1. Create a Cloudflare account at cloudflare.com
2. Go to Workers & Pages → Create Application → Create Worker
3. Name your worker (e.g., `loreal-chatbot-worker`)
4. Copy the contents of `cloudflare-worker.js` into the worker editor
5. Add your OpenAI API key as an environment variable:
   - In worker settings → Variables → Add Variable
   - Name: `OPENAI_API_KEY`
   - Value: Your OpenAI API key
6. Deploy the worker
7. Copy the worker's URL (e.g., `https://loreal-chatbot-worker.your-subdomain.workers.dev`)

### Step 2: Update script.js
In `script.js`, replace `YOUR_CLOUDFLARE_WORKER_URL` with your actual worker URL:
```javascript
const workerUrl = 'https://loreal-chatbot-worker.your-subdomain.workers.dev';
```

### Step 3: Open in Browser
Open `index.html` in your browser to test locally.

## L'Oréal Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| L'Oréal Black | #10069f | Primary brand color |
| Gold | #c5a88e | Accents |
| Rose | #d4a5a5 | Subtle highlights |
| Dark | #1a1a2e | Text |
| Light | #faf8f5 | Backgrounds |

## Rubric Checklist

- [x] **L'Oréal Branding** - Logo shown, official brand colors used
- [x] **Chatbot Configuration** - System prompt, input capture, API call, response display
- [x] **AI Relevance** - Refuses off-topic questions, stays on skincare
- [x] **Secure Deployment** - Cloudflare Worker properly configured
- [x] **LevelUp: Conversation History** - Context-aware responses
- [x] **LevelUp: User Question Display** - Shows user's question above response
- [x] **LevelUp: Chat Bubble UI** - Distinct styling for user/assistant messages
- [ ] **Reflection Questions** - Answered thoughtfully

## Reflection Questions

1. **Building a Chatbot**: What was challenging about connecting all the pieces?
2. **Talking Points**: How would you improve the user experience?
3. **L'Oréal Recruiter**: Why would L'Oréal be interested in AI chatbots for skincare?

---

*Built as part of a GCA coding assignment. L'Oréal is a registered trademark of L'Oréal S.A.*