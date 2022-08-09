import React, { useState } from "react";
import { StyleSheet, Button, TextInput, Text } from "react-native";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from "../.firebase-config";

if (getApps().length == 0)
  initializeApp(firebaseConfig);

const app = getApp();
const auth = getAuth(app);

const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState("mathiasmagnussons@gmail.com");
  const [passoword, setPassword] = useState("arstarsarst");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, passoword);

      navigation.navigate("Tab");
    } catch (err) {
      console.error(err);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, passoword);

      navigation.navigate("Tab");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Text>Email</Text>
      <TextInput style={styles.text} onChangeText={email => setEmail(email)} />
      <Text>Password</Text>
      <TextInput style={styles.text} onChangeText={password => setPassword(password)} />
      <Button title="Register" onPress={() => register()} />
      <Button title="Login" onPress={() => login()} />
      <Button title="Yeet" onPress={() => navigation.navigate("Tab")} />
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "salmon",
  },
});

export default Login;
=======
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
