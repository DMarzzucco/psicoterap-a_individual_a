import { Dates } from "@/ts";

const service_id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE!;
const template_id = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE!;
const user_id = process.env.NEXT_PUBLIC_EMAILJS_USER!;

export default async function sendEmail(date: Dates) {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            service_id: service_id,
            template_id: template_id,
            user_id: user_id,
            template_params: date
        })
    })
    const res_text = await response.text()

    if (!response.ok) {
        const error: any = await response.text();
        throw new Error(`response is not Ok: ${error.message}`)
    }
    try {
        if (res_text === 'OK') {
            console.log("Email was sent")
            return { message: "Email sent" }
        }
    } catch (error: any) {
        throw new Error(` error in line n 30 : ${error.message}`)
    }

}