"use client";

import React, { useState, useReducer } from "react";
import { useContextProp, AuthProp, ButtonType, Dates } from "@/ts";
import { BooleansItems } from "@/components";
import { Reducer } from "./Reducer";
import { toast } from "sonner";
import { sendEmail, parseDate } from "@/app/api";

export const AuthContext = React.createContext<useContextProp | undefined>(undefined)

export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (!context) { throw new Error(`${Error}`) }
    return context;
};

const AuthProvider: React.FC<AuthProp> = ({ children }) => {

    const [curr, setCurr] = useState<number>(0);
    const [state, dispatch] = useReducer(Reducer, BooleansItems)

    const sendAction = async (FormData:FormData) =>{
        const date: Dates = parseDate(FormData)
        try{
            await sendEmail (date)
            return {seccues: true}
        }catch(error:any){
            throw new Error (`Error in send_action: ${error.message}`)
        }
    }
    const formAction = async (date: FormData) => {
        try {
            await sendAction(date)
            toast.success("Message was send");
            dispatch({ type: "close_form" })
        } catch (error: any) {
            throw new Error(`formAction_error:${error.message}`)
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
        <AuthContext.Provider value={{ handleButton, curr, setCurr, state, formAction}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;
