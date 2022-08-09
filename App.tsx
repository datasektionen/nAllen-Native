import { StyleSheet, Button, Text } from "react-native";
import { auth, RecaptchaVerifier, app } from "./lib/firebase";

export default function App() {
  const v = new RecaptchaVerifier("recap", null, app);
  const f = async () => {
    try {
      const res = await auth.signInWithPhoneNumber("+46793488021", v);
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Text className="recap" />
      <Button title="Bing bong" onPress={() => f} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
