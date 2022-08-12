import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import React, { useContext, useEffect, useState } from "react"
import { mockGroups } from "../assets/data/mock-group"
import Group from "../components/group"

import { UserContext } from "../utils/user"
import { collection, getFirestore, onSnapshot } from "firebase/firestore"
import { CERISE_NEW, WHITE } from "../assets/style/colors"
import { signOut } from "firebase/auth";

const Profile = ({ navigation }: any) => {
  const [allMembers, setAllMembers] = useState<any>([])
  const [groupMembers, setGroupMembers] = useState<any>([])
  const { user, auth } = useContext(UserContext)

  const setupNewsListener = () => {
    const db = getFirestore();
    const reference = collection(db, 'n0llan');

    let groupMembers = [];
    const unsubscribe = onSnapshot(reference, (snapshot) => {
      let members: any[] = [];
      let me: any;
      snapshot.forEach(doc => {
        //console.log(doc.data())
        // add doc to members list
        const data = doc.data();
        if (data.email === user!.email) {
          me = data;
        }
        members.push(data);
      })
      if (me) {
        // filter members to only those in the same group as the user
        members = members.filter((member: any) => {
          return member.group === me.group;
        })
        console.log('new members:', members);
        setGroupMembers(members);
      }
    })

  }

  // run setupNewsListener when component is mounted
  useEffect(() => {
    setupNewsListener();
  }, []);

  // check for when groupMembers, updates
  useEffect(() => {
    console.log("Members updated", groupMembers);
  }, [groupMembers]);

  const logout = () => {
    auth && signOut(auth);
      navigation.navigate("Login");
  };

  return (
    <View>
      {groupMembers.length > 0 ? (
        <Group name={groupMembers[0].group} members={groupMembers} />
      ) : (
        <View style={styles.loading}>
          <Text>Loading groups...</Text>
        </View>
      )}
      <View style={styles.idk}>
        <TouchableOpacity onPress={logout}>
          <Text style={styles.logOut}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

// styles
const styles = StyleSheet.create({
  loading: {
    display: "flex",
    flexDirection: "column",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: WHITE,
    alignItems: "center",
    justifyContent: "center",
  },
  idk: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    justifyContent: "flex-end",
  },
  logOut: {
    color: WHITE,
    backgroundColor: CERISE_NEW,
    fontSize: 14,
    fontWeight: "bold",
    padding: 4,
  },
});
