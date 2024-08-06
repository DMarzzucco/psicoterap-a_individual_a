import { Dates } from "@/ts";
import { Vars_entorn } from "./libs/vars";

const vars = new Vars_entorn()

export default async function sendEmail(date: Dates) {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            service_id: vars.service_id,
            template_id: vars.template_id,
            user_id: vars.user_id,

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