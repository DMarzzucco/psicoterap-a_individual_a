"use client";

import React, { useState, useRef, useReducer } from "react";
import { useContextProp, AuthProp, ButtonType, Dates } from "@/ts";
import { BooleansItems, DateTransferens } from "@/components";
import { Reducer } from "@/Reducer";
// import { Request } from "@/app/api/api.fetch";
import { Email } from "@/libs/email";

export const AuthContext = React.createContext<useContextProp | undefined>(undefined)

export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (!context) { throw new Error(`${Error}`) }
    return context;
};

const AuthProvider: React.FC<AuthProp> = ({ children }) => {

    const [curr, setCurr] = useState<number>(0);
    const [state, dispatch] = useReducer(Reducer, BooleansItems)
    const [date, setDate] = useState<Dates>(DateTransferens)

    const reForm = useRef<HTMLFormElement>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setDate(prev => ({
            ...prev,
            [name]: type === "number" ? Number(value) : value
        }))
    }


    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // await Request(date)
            await Email(date)
            dispatch({ type: "confirmation" })
            console.log("Emial was sending")
            const timer = setTimeout(() => {
                dispatch({ type: "close_confirmation" }),
                    window.location.reload
            }, 1000)
            return () => clearTimeout(timer)
        } catch (error: any) {
            throw new Error(`${error.message}`)
        } finally {
            dispatch({ type: "loading_end" })
        }
    }

    const handleButton = (op: ButtonType) => {
        switch (op.type) {
            case "input":
                dispatch({ type: "form" })
                break;
            case "closeInput":
                dispatch({ type: "close_form" })
                break;
            case "table":
                dispatch({ type: "table" })
                break;
            case "closeTable":
                dispatch({ type: "close_table" })
                break;
            default:
                throw new Error(`${Error}`)
        }
    };

    return (
        <AuthContext.Provider value={{
            handleButton, sendEmail, curr, setCurr, state, handleChange, date,
            reForm
        }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;
