import React, { useContext, useState } from "react";
import { StyleSheet, TextInput, Text, TouchableOpacity, View, Pressable } from 'react-native'
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from "../.firebase-config";
import { BLACK, CERISE_LIGHT, CERISE_STRONG, WHITE } from "../assets/style/colors";
import { UserContext } from "../utils/user";



const Login = ({ navigation }: any) => {
    const [email, setEmail] = useState("mathiasmagnussons@gmail.com");
    const [password, setPassword] = useState("arstarsarst");
    const { auth, setUser } = useContext(UserContext);

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth!, email, password);
            setUser(user);
            navigation.navigate("Tab");
            console.log("User logged in");
        } catch (err) {
            console.error(err);
        }
    };


    return (
        <View style={loginStyles.container}>
            <View style={loginStyles.innerContainer}>
                <Text style={loginStyles.innerTitle}>LOGIN</Text>
                <View>
                    <View style={loginStyles.inputField}>
                        <Text style={loginStyles.title}>Email</Text>
                        <TextInput style={loginStyles.textInput} onChangeText={email => setEmail(email)} />
                    </View>
                    <View style={loginStyles.inputField}>
                        <Text style={loginStyles.title}>Password</Text>
                        <TextInput secureTextEntry style={loginStyles.textInput} onChangeText={password => setPassword(password)} />
                    </View>
                </View>

                <View style={loginStyles.buttonBar}>
                    <Pressable style={loginStyles.button} onPress={() => login()} >
                        <Text style={loginStyles.buttonText}>Login</Text>
                    </Pressable>

                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={loginStyles.linkText} >Create account</Text>
                    </TouchableOpacity>
                </View>
                <Pressable style={{ marginTop: 5, backgroundColor: BLACK }} onPress={() => navigation.navigate('Tab')}>
                    <Text>Bypass</Text>
                </Pressable>
            </View>
        </View >
    );
}

export const loginStyles = StyleSheet.create({
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
        marginTop: 4,
    },

    buttonBar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
    },

    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 40,
        padding: 10,
        // space between the flex elements
        backgroundColor: CERISE_LIGHT,
        width: "100%",
        height: "100%",
    },

    innerContainer: {
        display: 'flex',
        padding: 10,
        borderColor: BLACK,
        borderStyle: "solid",
        borderRadius: 10,
        borderWidth: 2,
        maxWidth: "90%",
        width: 500,
        backgroundColor: WHITE,
    },

    innerTitle: {
        fontSize: 30,
        fontWeight: '900',
        textAlign: "center",
    },

    button: {
        backgroundColor: CERISE_STRONG,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
    },

    inputField: {
        marginTop: 30,
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
