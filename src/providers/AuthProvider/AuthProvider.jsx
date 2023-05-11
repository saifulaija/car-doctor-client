/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth";
import app from '../../firebase/Firebase';

export const AuthContext = createContext(null);
const auth = getAuth(app);



const AuthProvider = ({children}) => {

      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);


      const signUp = (email, password)=>{

            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password)
           
      }


      const signInUser = (email, password)=>{
            setLoading(true)
            return signInWithEmailAndPassword(auth, email, password)
      } 


      const logOut =()=>{
            setLoading(true);
            return signOut(auth)
      }



      const userUpdate =({displayName})=>{

            return updateProfile(auth.currentUser,({displayName}))
    
        }


      useEffect(()=>{

            const unsubscribe = onAuthStateChanged(auth, currentUser=>{
                  console.log(currentUser);
                  setUser(currentUser)
                  setLoading(false)
            })

            return ()=>{
                  unsubscribe()
            }
      },[])




      const authInfo = {user, signUp, loading, signInUser, logOut, userUpdate}





      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;