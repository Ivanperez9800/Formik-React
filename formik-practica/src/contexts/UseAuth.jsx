/*HOOK PERSONALIZDO PARA AUTENTICACION */

import { createContext, useContext } from "react";


export const authcontext = createContext();

export const useAuth = () => {
    const context = useContext(authcontext)

    if(!context) throw new Error("No auth provider")

    return context;
}