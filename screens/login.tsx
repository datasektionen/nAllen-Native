import React, { useState } from "react";
import { Button } from "react-native";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from "../.firebase-config";

if (getApps().length == 0)
  initializeApp(firebaseConfig);

const app = getApp();
const auth = getAuth(app);

const Login = () => {
  const [doLogin, setDoLogin] = useState(false);
  const [email, setEmail] = useState("mathiasmagnussons@gmail.com");
  const [passoword, setPassoword] = useState("arstarsarst");

  const login = async () => {
    const user = createUserWithEmailAndPassword(auth, email, passoword);
  };

  return (
    <Button title="Bing bong" onPress={() => login()} />
  );
}

export default Login;
