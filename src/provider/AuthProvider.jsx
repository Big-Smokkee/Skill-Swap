import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import {
    createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUpNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginExistingUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logoutUser = () => {
        setLoading(false);
        return signOut(auth);
    };

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const updateUserProfile = (object) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: object.name,
            photoURL: object.photoURL,
        });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const userInfo = {
        user,
        setUser,
        signUpNewUser,
        loginExistingUser,
        logoutUser,
        signInWithGoogle,
        updateUserProfile,
        loading,
        setLoading,
    };

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
