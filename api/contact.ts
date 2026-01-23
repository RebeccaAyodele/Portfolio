import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    const data = await resend.emails.send({
      from: "Rebecca <onboarding@resend.dev>", // sender name
      to: process.env.CONTACT_EMAIL as string, // your email
      subject: `New message: ${subject}`,
      reply_to: email,
      html: `
        <h2>New Message from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Mail send error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
