"use client"

import sendEmail from "@/libs/email"
import { parseDate } from "@/libs/formDate"
import { Dates } from "@/ts"

export const sendAction = async (FormData: FormData) => {
    const date: Dates = parseDate(FormData)
    try {
        await sendEmail(date)
        return { success: true }
    } catch (error: any) {
        throw new Error(`${error.message}`)
    }
}