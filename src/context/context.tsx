import { createContext, useContext } from "react";
import { AuthProv, useContextProp } from "../interfaces/interfaces";

export const AuthContext = createContext<useContextProp | undefined>(undefined)

export const useComps = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error(' useComps must be used within an authProvider')
    }
    return context;
}

const AuthProvider: React.FC<AuthProv> = ({ children }) => {
    // manejo de estados
    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;