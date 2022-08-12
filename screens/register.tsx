import { createUserWithEmailAndPassword } from "firebase/auth";
import { View, Text, TouchableOpacity, TextInput, Pressable } from "react-native"
import React, { useContext, useState } from "react"
import { styles } from "./login"
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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to nAllen!</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.innerTitle}>Register</Text>
        <View>
          <View style={styles.inputField}>
            <Text style={styles.title}>Email</Text>
            <TextInput style={styles.textInput} onChangeText={email => setEmail(email)} />
          </View>
          <View style={styles.inputField}>
            <Text style={styles.title}>Password</Text>
            <TextInput secureTextEntry style={styles.textInput} onChangeText={password => setPassword(password)} />
          </View>
          <View style={styles.inputField}>
            <Text style={styles.title}>Re-enter Password</Text>
            <TextInput secureTextEntry style={styles.textInput} onChangeText={rePassword => setRePassword(rePassword)} />
          </View>
        </View>

        <View style={styles.buttonBar}>
          <Pressable style={styles.button} onPress={() => handleRegister()} >
            <Text style={styles.buttonText}>Register</Text>
          </Pressable>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.linkText} >Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View >
  )
}

export default Register
