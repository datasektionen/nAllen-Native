import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { UserCredential } from 'firebase/auth'


interface User {
    user: UserCredential | null
    setUser: (user: UserCredential) => void | undefined
}

interface Props {
    children: React.ReactNode
}

export const UserContext = React.createContext<User>({
    user: null,
    setUser: () => { }
})


const UserHandler: React.FC<Props> = ({ children }) => {
    const [user, setUser] = useState<UserCredential | null>(null) // TODO: get this from local storage if possible

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserHandler