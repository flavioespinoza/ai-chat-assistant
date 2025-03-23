# AI Chat Assistant

An AI-powered chatbot built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Zustand**, and the **OpenAI API**. Features include streaming GPT-4 responses, theme toggling, Zustand-powered state, and clean UI components from shadcn/ui.

---

## ✨ Features

- 💬 Real-time AI chat interface (GPT-4)
- 🌗 Theme toggle with `next-themes`
- ⚡ Streaming response support via `ai` SDK
- 💾 Zustand for chat state (no localStorage)
- 🎨 Styled with Tailwind CSS and shadcn/ui
- 🔐 Secure API key management using `.env.local`

---

## 🛠️ Tech Stack

- [Next.js 14](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [OpenAI API](https://platform.openai.com/)
- [Zustand](https://github.com/pmndrs/zustand)
- [shadcn/ui](https://ui.shadcn.com/)
- [lucide-react](https://lucide.dev/)
- [ai SDK](https://sdk.vercel.ai/docs)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/flavioespinoza/ai-chat-assistant.git
cd ai-chat-assistant
```

### 2. Install Dependencies

```bash
yarn install
```

### 3. Get Your OpenAI Secret Key

1. Go to: [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)
2. Log in or create an OpenAI account
3. Click **“+ Create new secret key”**
4. Copy the generated key (starts with `sk-...`)

### 4. Set Up Environment Variables

Create a `.env.local` file at the root with this content:

```env
OPENAI_API_KEY=your-openai-secret-key-here
```

### 5. Run the Development Server

```bash
yarn dev
```

Then visit: [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
src/
├── app/                         # Next.js app directory (App Router)
│   ├── api/                     # API routes for server-side functions
│   │   └── chat/
│   │       └── route.ts         # POST endpoint that streams responses from OpenAI
│   ├── favicon.ico              # Browser tab icon
│   ├── globals.css              # Global Tailwind styles
│   ├── layout.tsx               # App-wide layout (wraps pages, includes <ThemeProvider>)
│   └── page.tsx                 # Main UI for the chat assistant (front-end logic)
│
├── components/
│   └── ui/                      # UI components based on shadcn/ui
│       ├── button.tsx           # Reusable button component
│       ├── card.tsx             # Card wrapper for message layout
│       └── input.tsx            # Input component for prompt field
│
├── lib/
│   ├── store/                   # Global state management
│   │   └── chat-store.ts        # Zustand store to manage chat message history
│   └── utils.ts                 # (optional) Shared utilities (not used yet)

```

---

## 🧪 Example Prompts

- “Summarize the latest AI trends in 3 bullets.”
- “What’s the difference between GPT-3.5 and GPT-4?”
- “Write a tweet about Zustand vs Redux.”

---

## 📝 License

MIT — free to use, modify, and share.
