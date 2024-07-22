import React, { createContext, useContext, useRef, useState } from "react";
import { AuthProv, useContextProp } from "../interfaces/interfaces";
import { sendEmailjs } from "../api/SendEmail";

export const AuthContext = createContext<useContextProp | undefined>(undefined)

export const useComps = () => {
    const context = useContext(AuthContext);
    if (!context) { throw new Error(`${Error}`) }
    return context;
}
const AuthProvider: React.FC<AuthProv> = ({ children }) => {
    const [curr, setCurr] = useState<number>(0)
    const [openForm, setOpenForm] = useState<boolean>(false)
    const [messageSent, setMessageSent] = useState<boolean>(false)
    const [sending, setSending] = useState<boolean>(false)
    const [table, setTable] = useState<boolean>(false)

    const reForm = useRef<HTMLFormElement>(null);

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!reForm.current) {
            return
        }
        setSending(true);
        try {
            await sendEmailjs(reForm.current)
            setMessageSent(true)
            console.log("Mensaje enviado ")
            const timer = setTimeout(() => { setMessageSent(false), window.location.reload }, 1000)
            return () => clearTimeout(timer)
        } catch (error) {
            console.log(error)
            throw new Error
        } finally {
            setSending(false);
        }
    }
    const handleButton = (op: "input" | "closeInput" | "table" | "closeTable") => {
        if (op === "input") {
            setOpenForm(true)
            setTable(false)
        }
        if (op === "closeInput") {
            setOpenForm(false)
        }
        if (op === "table") {
            setTable(true)
            setOpenForm(false)
        }
        if (op === "closeTable") {
            setTable(false)
        }
    }
    return (
        <AuthContext.Provider value={{ openForm, handleButton, sendEmail, reForm, messageSent, sending, curr, setCurr, table }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;