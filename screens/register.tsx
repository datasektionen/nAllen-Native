import { createUserWithEmailAndPassword } from "firebase/auth";
import { View, Text, TouchableOpacity, TextInput, Pressable } from "react-native"
import React, { useContext, useState } from "react"
import { loginStyles } from "./login"
import { UserContext } from "../utils/user";

const Register = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const { auth } = useContext(UserContext);

  const handleRegister = async () => {
    if (auth === null) return;
    try {
      if (password === rePassword) {
        createUserWithEmailAndPassword(auth, email, password);

        navigation.navigate("Tab");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={loginStyles.container}>
      <View style={loginStyles.header}>
        <Text style={loginStyles.headerText}>Welcome to nAllen!</Text>
      </View>
      <View style={loginStyles.innerContainer}>
        <Text style={loginStyles.innerTitle}>Register</Text>
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
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={loginStyles.linkText} >Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View >
  )
}

export default Register

