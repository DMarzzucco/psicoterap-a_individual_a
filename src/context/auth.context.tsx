"use client";

import React, { useState, useRef, useReducer } from "react";
import { useContextProp, AuthProp, ButtonType, Dates } from "@/ts";
import { BooleansItems, DateTransferens } from "@/components";
import { Reducer } from "@/Reducer";

export const AuthContext = React.createContext<useContextProp | undefined>(undefined)

export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (!context) { throw new Error(`${Error}`) }
    return context;
};

const AuthProvider: React.FC<AuthProp> = ({ children }) => {

    const [curr, setCurr] = useState<number>(0);
    const [state, dispatch] = useReducer(Reducer, BooleansItems)

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
        <AuthContext.Provider value={{ handleButton, curr, setCurr, state }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;
