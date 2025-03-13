import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

import { app } from '../firebase/firebase.config'
import axios from 'axios'
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



      const saveUser = async (user) => {
            const currentUser = {
                  email: user?.email,
                  role: 'admin',
                  status: 'verify'
            }
            const { data } = await axios.put('http://localhost:5000/users', currentUser)
            console.log('data', data)
            return data;
      }



      const getToken = async (user) => {
            const email = user?.email;
            const { data } = await axios.post('http://localhost:5000/jwt', email)
            if (data.token) {
                  console.log('token', data?.token)
                  localStorage.setItem('token', data?.token)
            }

      }



      useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, currentUser => {
                  if (currentUser) {
                        setUser(currentUser)
                        saveUser(currentUser)
                        getToken(currentUser)
                        console.log('currentUser', currentUser)
                        setLoading(false)
                        // token
                  } else {
                        localStorage.removeItem('token')
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