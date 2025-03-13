import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

import { app } from '../firebase/firebase.config'

export const AuthContext = createContext(null);

const auth = getAuth(app);

// const provider = new GoogleAuthProvider();
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);


      const createUser = (email, password) => {
            setLoading(true);
            return createUserWithEmailAndPassword(auth, email, password);
      };

      const updateUserProfile = (name, photo) => {
            return updateProfile(auth.currentUser, {
                  displayName: name,
                  photoURL: photo,
            });
      };

      const loginUser = (email, password) => {
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, password);
      };
      const signInWithGoogle = () => {
            setLoading(true);
            return signInWithPopup(auth, googleProvider);
      };

      const logOut = () => {
            setLoading(true);
            return signOut(auth);
      };




      useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, currentUser => {
                  if (currentUser) {
                        setUser(currentUser)
                        console.log('currentUser', currentUser)
                        setLoading(false)
                  }

            })
            return () => unsubscribe()
      }, [])



      const authInfo = {
            user,
            loading,
            createUser,
            loginUser,
            logOut,
            updateUserProfile,
            signInWithGoogle,
            // googleLogin,
      };


      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );


};

export default AuthProvider;