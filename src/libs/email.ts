import { Dates } from "@/ts"
import emailjs from "@emailjs/browser"

export const Email = async (formData: Dates) => {

    const formDataRecord: Record<string, any> = {
        name: formData.name,
        phone: formData.phone,
        mail: formData.mail,
        context: formData.context,
        message: formData.message
    };
    try {
        const response = await emailjs.send(

            process.env.SERVICE as string,
            process.env.TEMPLATE as string,
            formDataRecord,
            process.env.USER as string
        )
        return response
    } catch (error: any) { 
        throw new Error (`${error.message}`)
    }
}