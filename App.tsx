import React, { useRef, useState } from "react";
import { Button } from "react-native";
import { PhoneAuthProvider } from "firebase/auth";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebaseConfig from "./.firebase-config";

if (getApps().length == 0)
  initializeApp(firebaseConfig);

const app = getApp();
const auth = getAuth(app);


export default function App() {
  const recaptchaVerifierModalRef = useRef<FirebaseRecaptchaVerifierModal>(null);
  const [doLogin, setDoLogin] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const login = async () => {
    if (recaptchaVerifierModalRef.current == null) { return }

    const phoneProvider = new PhoneAuthProvider(auth);
    const verId = await phoneProvider.verifyPhoneNumber(
      phoneNumber,
      recaptchaVerifierModalRef.current,
    );
  };
  if (doLogin) {
    console.log("The default app obviously exist: ", getApp());
    console.log("Or does it?");
    return (
      <>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifierModalRef}
          firebaseConfig={app.options}
          title="Big chungus"
        />
      </>
    );
  }

  return (
    <Button title="Bing bong" onPress={() => setDoLogin(true)} />
  );
}
