import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, message } = await req.json()

    // Validate input
    if (!name || !message) {
      return NextResponse.json(
        { error: 'Name and message are required' },
        { status: 400 }
      )
    }

    // Log the message (for now, until email is configured)
    console.log('🎉 New message from Sarah Party contact form:', {
      name,
      message: message.substring(0, 100) + (message.length > 100 ? '...' : ''),
      timestamp: new Date().toISOString(),
    })

    // TODO: Configure email service
    // Add these environment variables to .env.local:
    // SMTP_USER=your-email@gmail.com
    // SMTP_PASS=your-app-password
    // CONTACT_EMAIL=sarah@example.com
    
    return NextResponse.json({ 
      success: true,
      message: `Thanks ${name}! Your message has been received! 💌`,
      received: true
    }, { status: 200 })

  } catch (error) {
    console.error('❌ Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    )
  }
}
