# AI Chat Assistant

An AI-powered chatbot built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Zustand**, and **OpenAI API**. Features include theme toggling, chat history (in memory via Zustand), and streaming responses using the `ai` SDK.

---

## ✨ Features

- 💬 Real-time chat interface with GPT-4
- 🌗 Dark/light mode toggle using `next-themes`
- ⚡ Streaming response support via `ai` SDK
- 💾 Chat state managed by Zustand (no localStorage)
- 🎨 UI components built with `shadcn/ui` and `lucide-react`
- 🔐 Environment variable support for secure API keys

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

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/ai-chat-assistant.git
   cd ai-chat-assistant
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file with your OpenAI key:

   ```env
   OPENAI_API_KEY=your-openai-key-here
   ```

4. **Run the development server**
   ```bash
   yarn dev
   ```

5. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
app/
  page.tsx              # Chat UI
  api/chat/route.ts     # GPT-4 streaming API
lib/
  store/chat-store.ts   # Zustand store for messages
components/ui/          # Reusable UI components
.env.local              # API key (not committed)
```

---

## 🧪 Example Prompts

- “Summarize the latest AI trends in 3 bullets.”
- “What’s the difference between GPT-3.5 and GPT-4?”
- “Write a tweet about Zustand vs Redux.”

---

## 📝 License

MIT — free to use, modify, and share.
