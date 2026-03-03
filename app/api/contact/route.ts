import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import type { ContactFormData, ContactFormResponse } from '@/types/experience';

export async function POST(request: NextRequest): Promise<NextResponse<ContactFormResponse>> {
  try {
    const body: ContactFormData = await request.json();
    const { email, question } = body;

    // Validate required fields
    if (!email || !question) {
      return NextResponse.json(
        { success: false, message: 'Please provide both email and question fields.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Get SMTP configuration from environment
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT || '587';
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const toEmail = process.env.TO_EMAIL || 'sandrakihoro490@gmail.com';

    // Check if SMTP is configured
    if (!smtpHost || !smtpUser || !smtpPass) {
      // Alternative: Use a third-party form service like Formspree
      // Uncomment below to use Formspree instead:
      /*
      const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';
      const formspreeResponse = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message: question }),
      });
      if (formspreeResponse.ok) {
        return NextResponse.json(
          { success: true, message: 'Message sent successfully!' },
          { status: 200 }
        );
      }
      */
      
      return NextResponse.json(
        { 
          success: false, 
          message: 'Email service not configured. Please set up SMTP environment variables or use an alternative contact method.' 
        },
        { status: 500 }
      );
    }

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort, 10),
      secure: smtpPort === '465',
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Format timestamp
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'Africa/Nairobi',
      dateStyle: 'full',
      timeStyle: 'short',
    });

    // Email content
    const mailOptions = {
      from: smtpUser,
      to: toEmail,
      subject: `Portfolio Contact from ${email}`,
      text: `
New Contact Form Submission
---------------------------

Timestamp: ${timestamp}
Visitor Email: ${email}

Message:
${question}
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #0ea5e9; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background: #f9fafb; }
    .label { font-weight: bold; color: #666; }
    .value { margin-bottom: 15px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Contact Form Submission</h1>
    </div>
    <div class="content">
      <p><span class="label">Timestamp:</span> ${timestamp}</p>
      <p><span class="label">Visitor Email:</span> <a href="mailto:${email}">${email}</a></p>
      <p><span class="label">Message:</span></p>
      <p>${question.replace(/\n/g, '<br>')}</p>
    </div>
  </div>
</body>
</html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Message sent successfully! I\'ll get back to you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
