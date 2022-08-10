import { initializeApp, getApps, getApp } from "firebase/app";
import firebaseConfig from "../.firebase-config";
import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { getAuth, UserCredential, Auth } from 'firebase/auth'


interface User {
    user: UserCredential | null
    setUser: (user: UserCredential) => void | undefined
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
    const [user, setUser] = useState<UserCredential | null>(null) // TODO: get this from local storage if possible

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