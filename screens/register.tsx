import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { View, Text, TouchableOpacity, Button, StyleSheet, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import login, { auth } from './login'
import { BLACK, CERISE_STRONG, WHITE } from '../assets/style/colors';

const Register = ({ navigation }: any) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    const handleRegister = async () => {
        try {
            if (password === rePassword) {
                const user = await createUserWithEmailAndPassword(auth, email, password);
            }
            navigation.navigate("Tab");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <View style={styles.container}>
            <Text>REGISTER</Text>
            <View>
                <Text style={styles.title}>Email</Text>
                <TextInput style={styles.textInput} onChangeText={email => setEmail(email)} />
                <Text style={styles.title}>Password</Text>
                <TextInput style={styles.textInput} onChangeText={password => setPassword(password)} />
                <Text style={styles.title}>Re-enter Password</Text>
                <TextInput style={styles.textInput} onChangeText={rePassword => setRePassword(rePassword)} />
            </View>
            <Pressable style={styles.button} onPress={() => handleRegister()} >
                <Text style={styles.buttonText}>Register</Text>
            </Pressable>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.linkText} >Already have an account? Login here!</Text>
            </TouchableOpacity>

            <Pressable style={{ marginTop: 100, backgroundColor: BLACK }} onPress={() => navigation.navigate('Tab')}>
                <Text>Bypass</Text>
            </Pressable>
        </View>
    )
}

export default Register
const styles = StyleSheet.create({
    title: {
        color: BLACK,
        fontWeight: 'bold',
        textAlign: 'left',
    },

    textInput: {
        color: BLACK,
        fontSize: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: BLACK,
        padding: 5
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: WHITE,
        fontWeight: 'bold',
        fontSize: 40,
        marginTop: "40vh",
        padding: 40,
        // space between the flex elements
        flexWrap: 'wrap',
    },

    button: {
        backgroundColor: CERISE_STRONG,
        borderRadius: 5,
        padding: 10,
        margin: 10,
    },
    buttonText: {
        color: WHITE,
        fontSize: 20,
        fontWeight: 'bold',
    },

    linkText: {
        // color light blue
        color: '#00bfff',
        fontSize: 16,
    },
});

