import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.int';

export const Authcontext = createContext();

const AuthProvider = ({ children }) => {
    const [loading, setloading] = useState(true)

    const [user, setuser] = useState([])
    console.log(user, loading)

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, (currentuser) => {
            setuser('user are set', currentuser)
            setuser(currentuser)
            setloading(false)

            return () => {
                unsuscribe()
            }

        })


    }, [])

    const createuser = (email, password) => {
        setloading(true)

        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginuser = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logout = () => {
        setloading(true)
        return signOut(auth)
    }


    const userInfo = {
        createuser,
        loginuser,
        user, loading, logout,
        setuser,
    }
    return (
        <Authcontext.Provider value={userInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;