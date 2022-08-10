import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../utils/user'

const Home = () => {

    const { user } = useContext(UserContext)
    console.log('u', user)
    return (
        <View>
            <Text>Hem</Text>
        </View>
    )
}

export default Home