import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext = createContext(null)

const AuthPorvaider = ({ children }) => {
    const [user, setuser] = useState(null)
    const name = 'kausar mia'

    const creactUsar = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singInUsr = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);

    }

    const signOutUser = () => {
        return signOut(auth)
    }


    // onAuthStateChanged(auth, creactUsar => {
    //     if (creactUsar) {
    //         console.log('currectly Logged user', creactUsar);
    //         setuser(creactUsar)
    //     }
    //     else {
    //         console.log('No Ueser loogid in');
    //         setuser(null)
    //     }
    // })

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, creactUsar => {
            console.log('current user ', creactUsar);
            setuser(creactUsar)
        })
        return () => {
            unSubscribe()
        }
    }, [])



    const authInfo = {
        name,
        user,
        creactUsar,
        singInUsr,
        signOutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthPorvaider;