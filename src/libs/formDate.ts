import { Dates } from "@/ts";

export function parseDate(formData: FormData): Dates {
    return {
        name: formData.get('name')?.toString() ?? "",
        phone: formData.get('phone')?.toString() ?? "",
        mail: formData.get('mail')?.toString() ?? "",
        context: formData.get('context')?.toString() ?? "",
        message: formData.get('message')?.toString() ?? ""
    }
}