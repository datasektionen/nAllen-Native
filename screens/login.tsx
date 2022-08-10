import React, { useContext, useState } from "react";
import { StyleSheet, TextInput, Text, TouchableOpacity, View, Pressable } from 'react-native'
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from "../.firebase-config";
import { BLACK, CERISE_LIGHT, CERISE_STRONG, WHITE } from "../assets/style/colors";
import { UserContext } from "../utils/user";

if (getApps().length == 0)
    initializeApp(firebaseConfig);

export const app = getApp();
export const auth = getAuth(app);

const Login = ({ navigation }: any) => {
    const [email, setEmail] = useState("mathiasmagnussons@gmail.com");
    const [password, setPassword] = useState("arstarsarst");
    const { setUser } = useContext(UserContext);
    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            setUser(user);
            navigation.navigate("Tab");
        } catch (err) {
            console.error(err);
        }
    };


    return (
        <View style={styles.container}>

            <Text>LOGIN</Text>
            <View>
                <Text style={styles.title}>Email</Text>
                <TextInput style={styles.textInput} onChangeText={email => setEmail(email)} />
                <Text style={styles.title}>Password</Text>
                <TextInput style={styles.textInput} onChangeText={password => setPassword(password)} />
            </View>

            <Pressable style={styles.button} onPress={() => login()} >
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>

            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.linkText} >Don't have an acount yet? Register here!</Text>
            </TouchableOpacity>

            <Pressable style={{ marginTop: 100, backgroundColor: BLACK }} onPress={() => navigation.navigate('Tab')}>
                <Text>Bypass</Text>
            </Pressable>
        </View >
    );
}

const styles = StyleSheet.create({
    title: {
        color: BLACK,
        fontWeight: 'bold',
        textAlign: 'left',
    },

    textInput: {
        color: BLACK,
        fontSize: 16,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: BLACK,
        padding: 5,
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: WHITE,
        fontWeight: 'bold',
        fontSize: 40,
        marginTop: "40vh",
        padding: 10,
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

export default Login;


