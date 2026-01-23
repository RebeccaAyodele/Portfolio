import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Validate inputs
    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email using Resend
    const result = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "rebeccaayodele08@gmail.com",
      replyTo: email,
      subject: `New Contact: ${subject}`,
      html: `
        <h2>New Message from ${name}</h2>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return Response.json({ error: result.error }, { status: 500 });
    }

    return Response.json(
      { success: true, id: result.data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return Response.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
