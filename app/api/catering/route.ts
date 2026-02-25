import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { cateringSchema } from "@/lib/validators";
import { sendEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = cateringSchema.parse(body);

    const to = process.env.CATERING_EMAIL || process.env.RESTAURANT_CONTACT_EMAIL;
    if (!to) {
      throw new Error("Missing CATERING_EMAIL or RESTAURANT_CONTACT_EMAIL");
    }

    const subject = `Catering Inquiry - ${data.eventType} - ${data.name}`;
    const text = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Event Type: ${data.eventType}`,
      `Event Date: ${data.date}`,
      `Estimated Guests: ${data.guests}`,
      `Details: ${data.details ?? "None"}`,
    ].join("\n");

    await sendEmail({ to, subject, text });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ error: "Invalid input", details: error.flatten() }, { status: 400 });
    }
    console.error("Catering error", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
