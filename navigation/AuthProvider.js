import React , {createContext, useState} from 'react';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth} from "../firebase";
// const auth = getAuth();
import {db} from "../firebase"
import { collection, addDoc, setDoc, doc } from "firebase/firestore"; 

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try{
            await signInWithEmailAndPassword(auth, email, password);
          } catch(e) {
            console.log(e);
          }
        },
        register: async (email, password) => {
          try {
            await createUserWithEmailAndPassword(auth, email, password)

           
            
          }catch (e) {
            console.log(e);
          }

          try {
            await setDoc(doc(db, "Users", auth.currentUser.uid), {
              userId: auth.currentUser.uid,
              userName: '',
              email: email,
              createdAt: Date.now(),
              userImg: null,
              following: [],
              followers: [],
            })
          } catch (e){
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await signOut(auth);
          }catch (e){
            console.log(e);
          }
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};