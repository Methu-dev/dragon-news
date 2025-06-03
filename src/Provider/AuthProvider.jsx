import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)

const creatUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}

const logOut = ()=>{
   return signOut(auth)
}

const login = (email, password) =>{
  return signInWithEmailAndPassword(auth, email, password);
}

useEffect(()=>{
  const unSubscrib = onAuthStateChanged(auth, current =>{
        console.log("use in the auth state chenge", current);
        setUser(current)
    })
    return()=>{
       unSubscrib() 
    }
},[])
    const AuthInfo = {user, creatUser, logOut, login}
  return (
    <AuthContext.Provider value={AuthInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider