import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! })

export async function POST(req: NextRequest) {
	try {
		const { messages } = await req.json()

		if (!Array.isArray(messages)) {
			console.error('[API_CHAT_ERROR] Invalid messages payload:', messages)
			return new NextResponse('Invalid request format', { status: 400 })
		}

		const completion = await openai.chat.completions.create({
			model: 'gpt-4o-2024-05-13',
			messages,
			temperature: 0.7
		})

		const reply = completion.choices[0]?.message?.content || 'No response.'
		return NextResponse.json({ reply })
	} catch (error) {
		console.error('[API_CHAT_ERROR]', error)
		return new NextResponse('Internal Server Error', { status: 500 })
	}
}
