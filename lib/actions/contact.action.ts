"use server";
import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMail(body: any) {
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "aryankinmail@gmail.com",
      subject: "Note from iaryan.tech",
      text: "Hello",
      react: EmailTemplate({
        userMailId: body.data.email,
        mailContent: body.data.note,
      }),
    });

    if (error) {
      return { error, status: 500 };
    }

    return data;
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
