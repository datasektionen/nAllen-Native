import { initializeApp, getApps, getApp } from "firebase/app";
import firebaseConfig from "../.firebase-config";
import React, { useState, useEffect } from "react"
import { getAuth, Auth, onAuthStateChanged, User as FirebaseUser } from "firebase/auth"


interface User {
  user: FirebaseUser | null
  auth: Auth | null
}

interface Props {
  children: React.ReactNode
}

export const UserContext = React.createContext<User>({
  user: null,
  auth: null
})


const UserHandler: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null) // TODO: get this from local storage if possible
  const [auth, setAuth] = useState<Auth | null>(null);

  useEffect(() => {
    if (getApps().length == 0)
      initializeApp(firebaseConfig);

    const app = getApp();
    const auth = getAuth(app);
    setAuth(auth);

    return onAuthStateChanged(auth, thisUser => {
      if (user != null) {
        console.log("We are authenticated now!");
      }
      setUser(thisUser);

      // Do other things
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, auth }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserHandler
