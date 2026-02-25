import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { reservationSchema } from "@/lib/validators";
import { sendEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = reservationSchema.parse(body);

    const to = process.env.RESERVATIONS_EMAIL || process.env.RESTAURANT_CONTACT_EMAIL;
    if (!to) {
      throw new Error("Missing RESERVATIONS_EMAIL or RESTAURANT_CONTACT_EMAIL");
    }

    const subject = `New Reservation Request - ${data.name}`;
    const text = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Date: ${data.date}`,
      `Time: ${data.time}`,
      `Guests: ${data.guests}`,
      `Occasion: ${data.occasion ?? "None"}`,
      `Requests: ${data.requests ?? "None"}`,
    ].join("\n");

    await sendEmail({ to, subject, text });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ error: "Invalid input", details: error.flatten() }, { status: 400 });
    }
    console.error("Reservation error", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
