import { Dates } from "@/ts"

export const Request = async (date: Dates): Promise<void> => {
    try {
        const response = await fetch('/api/server/date', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(date)
        })
        if (!response.ok) {
            const error = await response.text()
            throw new Error(`Faild to send email ${error}`)
        }
        const dateResponse = await response.json();
        console.log(`Succes: ${dateResponse}`)

    } catch (error: any) {
        throw new Error(`${error.message}`)
    }
}