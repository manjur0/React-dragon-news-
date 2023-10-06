import { createContext, useState, } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../Firebase/Firebase.config";



export const AuthContext = createContext(null);
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useState(null);

    // create user link in register page 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const AuthInfo = {
        user,
        createUser,
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;