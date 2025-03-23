'use client'

import { useState } from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useChatStore } from '@/lib/store/chat-store'
import { Moon, Sun } from 'lucide-react'

export default function ChatPage() {
	const { messages, addMessage } = useChatStore()
	const [input, setInput] = useState('')
	const [loading, setLoading] = useState(false)
	const { theme, setTheme } = useTheme()

	const handleSend = async () => {
		if (!input.trim()) return
		setLoading(true)
		const userMessage: { role: 'user' | 'assistant'; content: string } = { role: 'user', content: input }
		addMessage(userMessage)
		setInput('')

		try {
			const res = await fetch('/api/chat', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ messages: [...messages, userMessage] })
			})

			let data
			try {
				data = await res.json()
			} catch {
				const fallback = await res.text()
				throw new Error(`API Error ${res.status}: ${fallback}`)
			}

			if (data.reply) {
				addMessage({ role: 'assistant', content: data.reply })
			}
		} catch (err) {
			console.error('Error sending message:', err)
			addMessage({ role: 'assistant', content: '⚠️ API error. Check logs or API key.' })
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className="mx-auto max-w-2xl space-y-4 p-4">
			<div className="flex items-center justify-between">
				<h1 className="text-xl font-bold">AI Chat Assistant</h1>
				<Button
					variant="outline"
					onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
					size="icon"
				>
					{theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
				</Button>
			</div>
			<div className="space-y-2">
				{messages.map((msg, idx) => (
					<Card key={idx}>
						<CardContent className="p-4">
							<p className="text-sm text-gray-500">{msg.role === 'user' ? 'You' : 'AI'}</p>
							<p>{msg.content}</p>
						</CardContent>
					</Card>
				))}
			</div>
			<div className="flex gap-2">
				<Input
					placeholder="Ask something..."
					value={input}
					onChange={(e) => setInput(e.target.value)}
					disabled={loading}
				/>
				<Button onClick={handleSend} disabled={loading}>
					Send
				</Button>
			</div>
		</div>
	)
}
