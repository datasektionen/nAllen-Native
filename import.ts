import { getFirestore, setDoc, doc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./.firebase-config";


export default async function() {
  initializeApp(firebaseConfig);
  const db = getFirestore();

  const data = ``; // Get csv from stön

  for (const line of data.split("\n").slice(1, -1)) {
    const [
      name,
      _homePhone,
      phone,
      kthId,
      email,
      street,
      postCode,
      city,
      group,
    ] = line.split(",").map(c =>
      (/^".*"$/.test(c))
        ? c.slice(1, -1)
        : c
    );

    if (!kthId) {
      console.log(name);
      continue;
    }

    await setDoc(
      doc(db, "n0llan", kthId),
      { name, phone, kthId, email, street, postCode, city, group },
    );
  }
}
