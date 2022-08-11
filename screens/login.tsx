import React, { useContext, useState } from "react";
import { StyleSheet, TextInput, Text, TouchableOpacity, View, Pressable } from "react-native"
import { signInWithEmailAndPassword } from "firebase/auth";
import { BLACK, CERISE_LIGHT, CERISE_STRONG, WHITE } from "../assets/style/colors";
import { UserContext } from "../utils/user";



const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { auth } = useContext(UserContext);

  const login = async () => {
    if (auth == null) return;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate("Tab");
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
        <Text style={loginStyles.innerTitle}>Sign in</Text>
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
            <Text style={loginStyles.buttonText}>Sign in</Text>
          </Pressable>

          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={loginStyles.linkText} >Create account</Text>
          </TouchableOpacity>
        </View>
        <Pressable style={{ marginTop: 5, backgroundColor: BLACK }} onPress={() => navigation.navigate("Tab")}>
          <Text>Bypass</Text>
        </Pressable>
      </View>
    </View >
  );
}

export const loginStyles = StyleSheet.create({
  title: {
    color: BLACK,
    fontWeight: "bold",
    textAlign: "left",
  },

  textInput: {
    color: BLACK,
    fontSize: 16,
    borderWidth: 1,
    borderColor: BLACK,
    padding: 8,
    marginTop: 10,
    backgroundColor: "#f2f2f2"

  },

  buttonBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },

  container: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 40,
    padding: 0,
    margin: 0,
    // space between the flex elements
    backgroundColor: WHITE,
    width: "100%",
    height: "100%",
    overflow: "hidden"
  },

  header: {
    backgroundColor: CERISE_LIGHT,
    overflow: "hidden",
    width: "100%",
    top: 0,
    padding: 10,
    paddingHorizontal: 30,
    minHeight: "160px",
    maxHeight: "28%",
    height: "100%"
  },


  headerText: {
    color: WHITE,
    fontWeight: "900",
    fontSize: 32,
    marginTop: "auto",
    paddingBottom: 20
  },


  innerContainer: {
    display: "flex",
    width: "100%",
    backgroundColor: WHITE,
    paddingHorizontal: 30,
    paddingTop: 30
  },

  innerTitle: {
    fontSize: 20,
    fontWeight: "900",
  },

  button: {
    backgroundColor: CERISE_STRONG,
    borderRadius: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
  },

  inputField: {
    marginTop: 30,
  },

  buttonText: {
    color: WHITE,
    fontSize: 14,
    fontWeight: "bold",
  },
  linkText: {
    // color light blue
    color: CERISE_STRONG,
    fontSize: 14,
  },
});

export default Login;
