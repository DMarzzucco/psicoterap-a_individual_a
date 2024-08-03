import { NextRequest, NextResponse } from "next/server";

export async function POST (req: NextRequest) {
    const formData = await req.json();

    const serviceID = process.env.SERVICE || "service_xhmxkjl";
    const templateID = process.env.TEMPLATE || "template_7yi1umj";
    const userID = process.env.USER || "iT8BqbWUbZqyQKCa9";

    console.log (serviceID)
    console.log (templateID)
    console.log (userID)

    try {
        const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: "POST",
            body: JSON.stringify({
                ...formData,
                service_id: serviceID,
                template_id: templateID,
                user_id: userID
            }),
            headers: {
                'Content-Type': "application/json"
            }
        })
        if (!response.ok) {
            const erroData = await response.json();
            return NextResponse.json({ message: erroData?.message || "failed to send" }, { status: response.status })
        }
        return NextResponse.json({ message: "Email was send" }, { status: 200 })

    } catch (error: any) {
        return NextResponse.json({ message: `Error: ${error.message}` }, { status: 500 })
    }
};