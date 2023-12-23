import {
    useEffect,
    useState
}
    from "react";

/* FUNCIONES PARA CREAR USUARIOS, INICIAR SESION, VER SI EL ESTADO CAMBIO Y SALIR DE SESION */
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
}
    from 'firebase/auth';

import { authcontext, useAuth } from "./UseAuth";

import React from 'react'
import { auth } from "../firebase/firebase.config";

function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUp = async (email, password) => {
        // console.log("signUp", email, password);
        await createUserWithEmailAndPassword(auth, email, password)
    }

    const login = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password);

    }

    const logOut = async () => {
        signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })

        return () => unsubscribe();
    }, [])


    return (

        <authcontext.Provider value={{ signUp, login, user, logOut, loading }} >
            {children}
        </authcontext.Provider>

    )
}

export default AuthProvider