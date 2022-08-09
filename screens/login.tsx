import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Login: React.FC = ({ navigation }: any) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Tab')}>
            <Text>Go To App</Text>
        </TouchableOpacity>
    )
}

export default Login

// styles
const styles = StyleSheet.create({
    container: {
        widht: "100%",
        height: "20%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        fontSize: 40,
    },
})
