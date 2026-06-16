import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user);
    const signUpNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginExistingUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logoutUser = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser)
                setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])
    const userInfo = {
        user,
        setUser,
        signUpNewUser,
        loginExistingUser,
        logoutUser
    }

    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;