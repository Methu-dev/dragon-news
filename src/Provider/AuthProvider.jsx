import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)
const [loding, setLoding] = useState(true)

const creatUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}


const login = (email, password) =>{
  setLoding(true)
  return signInWithEmailAndPassword(auth, email, password);
}

const logOut = ()=>{
  setLoding(true)
   return signOut(auth)
}

useEffect(()=>{
  const unSubscrib = onAuthStateChanged(auth, current =>{
        setUser(current)
        setLoding(false)
    })
    return()=>{
       unSubscrib() 
    }
},[])
    const AuthInfo = {user, loding, creatUser, logOut, login}
  return (
    <AuthContext.Provider value={AuthInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider