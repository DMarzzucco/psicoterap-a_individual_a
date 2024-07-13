import React, { createContext, useContext, useRef, useState } from "react";
import { AuthProv, useContextProp } from "../interfaces/interfaces";
import emailjs from "@emailjs/browser"
import { sendEmailjs } from "../api/SendEmail";

export const AuthContext = createContext<useContextProp | undefined>(undefined)

export const useComps = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error(' useComps must be used within an authProvider')
    }
    return context;
}

const AuthProvider: React.FC<AuthProv> = ({ children }) => {
    const [openForm, setOpenForm] = useState<boolean>(false)
    const [messageSent, setMessageSent] = useState<boolean>(false)
    const [sending, setSending] = useState<boolean>(false)

    const reForm = useRef<HTMLFormElement>(null);

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!reForm.current) {
            return
        }
        setSending(true);

        // const serviceID = "service_xhmxkjl";
        // const template = "template_7yi1umj";
        // const key = "iT8BqbWUbZqyQKCa9";
        try {
            // await emailjs.sendForm(serviceID, template, reForm.current, key)
            await sendEmailjs(reForm.current)
            setMessageSent(true)
            console.log("Mensaje enviado ")
            const timer = setTimeout(() => setMessageSent(false), 1000)
            return () => clearTimeout(timer)
        } catch (error) {
            console.log(error)
            throw new Error
        } finally {
            setSending(false);
        }
    }

    const handleButton = (op: "open" | "close") => {
        setOpenForm(() => {
            if (op === "open") { return true; }
            return false
        })
    }


    // manejo de estados
    return (
        <AuthContext.Provider value={{ openForm, handleButton, sendEmail, reForm, messageSent, sending }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;