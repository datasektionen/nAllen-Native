import { initializeApp, getApps, getApp } from "firebase/app";
import firebaseConfig from "../.firebase-config";
import React, { useState, useEffect } from "react"
import { Auth, onAuthStateChanged, User as FirebaseUser, initializeAuth } from "firebase/auth";
import { getReactNativePersistence } from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
});


const UserHandler: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [auth, setAuth] = useState<Auth | null>(null);

  useEffect(() => {
    if (getApps().length == 0)
      initializeApp(firebaseConfig);

    const app = getApp();
    const auth = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
    setAuth(auth);

    return onAuthStateChanged(auth, user => {
      setUser(user);
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, auth }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserHandler;
