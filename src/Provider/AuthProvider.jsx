import { createContext, useEffect, useState, } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";



export const AuthContext = createContext(null);
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user link in register page 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign In 
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // LogOut func
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscrib = onAuthStateChanged(auth, currentUser => {
            console.log('uset is the auth state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
        setLoading(true)
            unsubscrib;
        }

    }, [])

    const AuthInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;