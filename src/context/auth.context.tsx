"use client";

import React, { useState, useRef } from "react";
import { useContextProp, AuthProp, ButtonType } from "@/ts";
import { sendEmailjs } from "@/app/api/SendEmail";

export const AuthContext = React.createContext<useContextProp | undefined>(undefined)

export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (!context) { throw new Error(`${Error}`) }
    return context;
};

const AuthProvider: React.FC<AuthProp> = ({ children }) => {

    const [curr, setCurr] = useState<number>(0);
    const [openForm, setOpenForm] = useState<boolean>(false)
    const [messageSent, setMessageSent] = useState<boolean>(false)
    const [sending, setSending] = useState<boolean>(false)
    const [table, setTable] = useState<boolean>(false)

    const reForm = useRef<HTMLFormElement>(null)

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!reForm.current) { return }
        setSending(true);
        try {
            await sendEmailjs(reForm.current)
            setMessageSent(true)
            console.log("Emial was sending")
            const timer = setTimeout(() => { setMessageSent(false), window.location.reload }, 1000)
            return () => clearTimeout(timer)
        } catch (error: any) {
            throw new Error(`${error.message}`)
        } finally {
            setSending(false);
        }
    }

    const handleButton = (op: ButtonType) => {
        switch (op.type) {
            case "input":
                setOpenForm(true);
                setTable(false);
                break;
            case "closeInput":
                setOpenForm(false);
                break;
            case "table":
                setTable(true)
                setOpenForm(false)
                break;
            case "closeTable":
                setTable(false)
                break;
        }
    };

    return (
        <AuthContext.Provider value={{ handleButton, sendEmail, table, sending, messageSent, curr, openForm, setCurr, reForm }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;
