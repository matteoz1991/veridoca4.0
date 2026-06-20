import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const TO_EMAIL = 'info@digisoul.com'
const FROM_EMAIL = process.env.FROM_EMAIL ?? 'noreply@veridoca.com'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, subject, message } = body

    if (!firstName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY not set')
      return NextResponse.json({ error: 'Email service not configured' }, { status: 503 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const { error } = await resend.emails.send({
      from: `Veridoca Contact <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `[Veridoca Contact] ${subject ?? 'General Inquiry'} — ${firstName} ${lastName ?? ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #10b981;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #6b7280; width: 120px;"><strong>Name</strong></td><td style="padding: 8px 0;">${firstName} ${lastName ?? ''}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Email</strong></td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Subject</strong></td><td style="padding: 8px 0;">${subject ?? 'Not specified'}</td></tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;"/>
          <h3 style="color: #374151;">Message:</h3>
          <p style="color: #374151; white-space: pre-wrap; background: #f9fafb; padding: 16px; border-radius: 8px; border-left: 4px solid #10b981;">${message}</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;"/>
          <p style="color: #9ca3af; font-size: 12px;">Sent from veridoca.com contact form</p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
