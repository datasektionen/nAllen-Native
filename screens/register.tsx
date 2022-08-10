import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { View, Text, TouchableOpacity, Button, StyleSheet, TextInput, Pressable } from 'react-native'
import React, { useContext, useState } from 'react'
import login, { loginStyles } from './login'
import { BLACK, CERISE_STRONG, WHITE } from '../assets/style/colors';
import { UserContext } from "../utils/user";

const Register = ({ navigation }: any) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    const { auth, setUser } = useContext(UserContext);

    const handleRegister = async () => {
        try {
            if (password === rePassword) {
                const user = await createUserWithEmailAndPassword(auth!, email, password);
                setUser(user);
                navigation.navigate("Tab");
                console.log("User created");
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <View style={loginStyles.container}>
            <View style={loginStyles.innerContainer}>
                <Text style={loginStyles.innerTitle}>REGISTER</Text>
                <View>
                    <View style={loginStyles.inputField}>
                        <Text style={loginStyles.title}>Email</Text>
                        <TextInput style={loginStyles.textInput} onChangeText={email => setEmail(email)} />
                    </View>
                    <View style={loginStyles.inputField}>
                        <Text style={loginStyles.title}>Password</Text>
                        <TextInput secureTextEntry style={loginStyles.textInput} onChangeText={password => setPassword(password)} />
                    </View>
                    <View style={loginStyles.inputField}>
                        <Text style={loginStyles.title}>Re-enter Password</Text>
                        <TextInput secureTextEntry style={loginStyles.textInput} onChangeText={rePassword => setRePassword(rePassword)} />
                    </View>
                </View>

                <View style={loginStyles.buttonBar}>
                    <Pressable style={loginStyles.button} onPress={() => handleRegister()} >
                        <Text style={loginStyles.buttonText}>Register</Text>
                    </Pressable>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={loginStyles.linkText} >Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}

export default Register
