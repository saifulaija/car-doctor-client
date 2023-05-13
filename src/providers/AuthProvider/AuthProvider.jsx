/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/Firebase";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);

    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const userUpdate = ({ displayName }) => {
    return updateProfile(auth.currentUser, { displayName });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user in auth provider", currentUser);
      setLoading(false);

      if (currentUser && currentUser.email) {


            const loggedUser={
                  email:currentUser.email
                }
        fetch("https://car-doctor-server-five-taupe.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loggedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("jwt Response", data);
            // store local storage not best have to store in http cookies to access token jwt

            localStorage.setItem("car-access-token", data.token);
          });
      }

       else{
            localStorage.removeItem('car-access-token');
       }


    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    signUp,
    loading,
    signInUser,
    logOut,
    userUpdate,
    googleSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
