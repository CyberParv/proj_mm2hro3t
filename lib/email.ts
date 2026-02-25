export type EmailPayload = {
  to: string;
  subject: string;
  text: string;
  html?: string;
};

export async function sendEmail(payload: EmailPayload) {
  const webhookUrl = process.env.EMAIL_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn("EMAIL_WEBHOOK_URL is not set. Email delivery skipped.");
    return { ok: true, skipped: true };
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.EMAIL_WEBHOOK_TOKEN ?? ""}`,
    },
    body: JSON.stringify({
      to: payload.to,
      subject: payload.subject,
      text: payload.text,
      html: payload.html,
      from: process.env.EMAIL_FROM || "no-reply@bellacucina.com",
    }),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Email webhook failed: ${response.status} ${message}`);
  }

  return { ok: true };
}
