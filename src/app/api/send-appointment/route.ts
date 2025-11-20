import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, service, comments } = body;

    // Map service codes to readable names
    const serviceNames: Record<string, string> = {
      'implants': 'Dental Implants',
      'all-on-x': 'All-on-X Full Arch',
      'wisdom-teeth': 'Wisdom Teeth Removal',
      'tooth-extractions': 'Tooth Extractions',
      'bone-graft': 'Bone Grafting',
      'other': 'Other / Not Sure Yet',
    };

    const serviceName = serviceNames[service] || service;

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Elite Oral Surgery <onboarding@resend.dev>',
      to: 'chrismauck10@gmail.com',
      subject: `New Appointment Request - ${firstName} ${lastName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #4b4b4b 0%, #ff8200 100%);
                color: white;
                padding: 30px 20px;
                border-radius: 16px 16px 0 0;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
                font-weight: 600;
              }
              .content {
                background: #f8f9fa;
                padding: 30px;
                border-radius: 0 0 16px 16px;
              }
              .field {
                background: white;
                margin: 15px 0;
                padding: 15px;
                border-radius: 12px;
                border-left: 4px solid #ff8200;
              }
              .field-label {
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                color: #666;
                font-weight: 600;
                margin-bottom: 5px;
              }
              .field-value {
                font-size: 16px;
                color: #1a1a1a;
                font-weight: 500;
              }
              .comments {
                background: white;
                margin: 20px 0;
                padding: 20px;
                border-radius: 12px;
                border: 2px solid #e5e7eb;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 2px solid #e5e7eb;
                color: #666;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>🦷 New Appointment Request</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Patient Name</div>
                <div class="field-value">${firstName} ${lastName}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Email Address</div>
                <div class="field-value"><a href="mailto:${email}" style="color: #ff8200; text-decoration: none;">${email}</a></div>
              </div>
              
              <div class="field">
                <div class="field-label">Phone Number</div>
                <div class="field-value"><a href="tel:${phone}" style="color: #ff8200; text-decoration: none;">${phone}</a></div>
              </div>
              
              <div class="field">
                <div class="field-label">Service of Interest</div>
                <div class="field-value">${serviceName}</div>
              </div>
              
              ${comments ? `
                <div class="comments">
                  <div class="field-label">Comments / Questions</div>
                  <div class="field-value" style="margin-top: 10px; white-space: pre-wrap;">${comments}</div>
                </div>
              ` : ''}
              
              <div class="footer">
                <p>This appointment request was submitted via the Elite Oral Surgery website.</p>
                <p style="margin-top: 10px;">Please respond within one business day.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

