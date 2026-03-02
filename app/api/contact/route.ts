import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, message } = await req.json();

        if (!name || !message) {
            return NextResponse.json({ error: 'Name and message are required' }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: `"Bachelorette Site" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL,
            subject: `New Bachelorette Message from ${name}`,
            text: `Name: ${name}\n\nMessage:\n${message}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #FF1493;">💌 New Message from ${name}</h2>
                    <p style="font-size: 16px; color: #333;">${message}</p>
                    <hr style="border-color: #FF1493;" />
                    <p style="font-size: 12px; color: #999;">Sent from Sarah's Bachelorette site</p>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error: unknown) {
        const errMsg = error instanceof Error ? error.message : 'Unknown error';
        console.error('Error sending email:', errMsg);
        return NextResponse.json({ error: 'Failed to send email: ' + errMsg }, { status: 500 });
    }
}
