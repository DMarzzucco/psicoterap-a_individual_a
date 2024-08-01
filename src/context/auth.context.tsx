"use client";

import React, { createContext, useContext } from "react";
import { useContextProp, AuthProp } from "@/ts";

export const AuthContext = createContext<useContextProp | undefined>(undefined)

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) { throw new Error(`${Error}`) }
    return context
}

const AuthProvider: React.FC<AuthProp> = ({ children }) => {
    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;
