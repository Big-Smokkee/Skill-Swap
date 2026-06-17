import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
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
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const updateUserProfile = (object) => {
        console.log(object);
        return updateProfile(auth.currentUser, {
            displayName: object.name,
            photoURL: object.photoURL
        })
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
        logoutUser,
        signInWithGoogle,
        updateUserProfile,
        loading,
        setLoading
    }

    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;