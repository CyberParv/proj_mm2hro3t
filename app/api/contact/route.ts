import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { contactSchema } from "@/lib/validators";
import { sendEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = contactSchema.parse(body);

    const to = process.env.RESTAURANT_CONTACT_EMAIL;
    if (!to) {
      throw new Error("Missing RESTAURANT_CONTACT_EMAIL");
    }

    const subject = `Contact Form: ${data.subject} - ${data.name}`;
    const text = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Subject: ${data.subject}`,
      `Message: ${data.message}`,
    ].join("\n");

    await sendEmail({ to, subject, text });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ error: "Invalid input", details: error.flatten() }, { status: 400 });
    }
    console.error("Contact error", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
