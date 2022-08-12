import React, { useContext, useState } from "react";
import { StyleSheet, TextInput, Text, TouchableOpacity, View, Pressable } from "react-native"
import { signInWithEmailAndPassword } from "firebase/auth";
import { BLACK, CERISE_LIGHT, CERISE_STRONG, WHITE } from "../assets/style/colors";
import { UserContext } from "../utils/user";

const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { auth, user } = useContext(UserContext);

  if (user !== null) navigation.navigate("Tab");

  const login = async () => {
    if (auth == null) return;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate("Tab");
    } catch (err) {
      console.error(err);
    }
  };

  const bypass = async () => {
    if (auth == null) return;
    try {
      await signInWithEmailAndPassword(auth, "test@test.test", "testtest");
      navigation.navigate("Tab");
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
        <Text style={styles.innerTitle}>Sign in</Text>
        <View>
          <View style={styles.inputField}>
            <Text style={styles.title}>Email</Text>
            <TextInput style={styles.textInput} onChangeText={email => setEmail(email)} />
          </View>
          <View style={styles.inputField}>
            <Text style={styles.title}>Password</Text>
            <TextInput secureTextEntry style={styles.textInput} onChangeText={password => setPassword(password)} />
          </View>
        </View>

        <View style={styles.buttonBar}>
          <Pressable style={styles.button} onPress={login} >
            <Text style={styles.buttonText}>Sign in</Text>
          </Pressable>

          <Pressable style={styles.button} onPress={bypass}>
            <Text style={styles.buttonText}>Bypass</Text>
          </Pressable>

          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.linkText} >Create account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View >
  );
};

export const styles = StyleSheet.create({
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
    backgroundColor: "#f2f2f2",
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
    backgroundColor: WHITE,
    width: "100%",
    height: "100%",
    overflow: "hidden",
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
    height: "100%",
  },


  headerText: {
    color: WHITE,
    fontWeight: "900",
    fontSize: 32,
    marginTop: "auto",
    paddingBottom: 20,
  },


  innerContainer: {
    display: "flex",
    width: "100%",
    backgroundColor: WHITE,
    paddingHorizontal: 30,
    paddingTop: 30,
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
    color: CERISE_STRONG,
    fontSize: 14,
  },
});

export default Login;
