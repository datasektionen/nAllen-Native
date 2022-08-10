import { initializeApp, getApps, getApp } from "firebase/app";
import firebaseConfig from "../.firebase-config";
import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { getAuth, Auth, onAuthStateChanged, User as FirebaseUser } from 'firebase/auth'


interface User {
    user: FirebaseUser | null
    setUser: (user: FirebaseUser) => void | undefined
    auth: Auth | null
}

interface Props {
    children: React.ReactNode
}

export const UserContext = React.createContext<User>({
    user: null,
    setUser: () => { },
    auth: null

})


const UserHandler: React.FC<Props> = ({ children }) => {
    const [user, setUser] = useState<FirebaseUser | null>(null) // TODO: get this from local storage if possible

    if (getApps().length == 0)
        initializeApp(firebaseConfig);

    const app = getApp();
    const auth = getAuth(app);

    onAuthStateChanged(auth, thisUser => {
        if (user != null) {
            console.log('We are authenticated now!');
            setUser(thisUser);
        }

        // Do other things
    });

    if (getApps().length == 0)
        initializeApp(firebaseConfig);

    const app = getApp();
    const auth = getAuth(app);

    return (
        <UserContext.Provider value={{ user, setUser, auth }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserHandler