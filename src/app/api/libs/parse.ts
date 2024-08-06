import { Dates } from "@/ts";
import sendEmail from "../routes";

export default class Dat {

    parseDate(formData: FormData): Dates {
        return {
            name: formData.get('name')?.toString() ?? "",
            phone: formData.get('phone')?.toString() ?? "",
            mail: formData.get('mail')?.toString() ?? "",
            context: formData.get('context')?.toString() ?? "",
            message: formData.get('message')?.toString() ?? ""
        }
    }
    sendActions = async (FormData: FormData) => {
        const date: Dates = this.parseDate(FormData);
        try {
            await sendEmail(date)
            return { seccues: true };
        } catch (error: any) {
            throw new Error(`send_action_error ${error.message}`)
        }
    };

}