# nAllen-Native
This project is meant to create a native/cloud solution for nAllen.

## Main Goals:
- Login 
- News 
- Simple way to add news (Slack bot)
- Static information about Title and outher group members
- Push notifications
- Calendar*
- Make it simple for every year to use this



## How to run the project
- clone the project: `git clone git@github.com:datasektionen/nAllen-Native.git`
- install yarn: `npm i -g yarn`
- add `.firebase-config.ts` and fill it with the correct data from Firebase.
  it should look something like this:
```ts
export default {
  apiKey: "yE5mUVduq_s3FfvD1GFVq_zrSKBS_CJjdWRfQR2",
  authDomain: "nappen-35011.firebaseapp.com",
  databaseURL: "https://nappen-35011.firebaseio.com",
  projectId: "nappen-35011",
  storageBucket: "nappen-35011.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:34bd567890a123b45cde6f",
  measurementId: "G-21PF2URV4K",
};
```
- start the project: `yarn start`

## Importing nØllan

Since importing into firestore requires high permissions and enabling billing,
there is a script at `import.ts` made to import nØllan into firestore. Here is
a guide on how to use it.

1. Download the csv of nØllan from STÖn
2. Paste it into the string at
   [import.ts](https://github.com/datasektionen/nAllen-Native/blob/f2ca5112f3a07f21eb1c715af0d3a8dfa8eb3a9d/import.ts#L10)
   leaving one newline at the end of the string and none at the beginning.
3. Import the script from somewhere in the app and make the function callable.
4. Change the rules for firestore in the
   [firebase console](https://console.firebase.google.com/u/0/project/nappen-35011/firestore/rules)
   to allow writing to n0llan with this rule:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /n0llan/{kthId} {
      allow write: if true;
    }
    ...
  }
}
```
5. Start the app and make sure the import function is called.
6. Revert the rule change from step 4
7. Restore the app to not import/call the data import function and to not hardcode the n0llan csv file.
8. Think about a better way to do this

## Things done:
- Login
- News


