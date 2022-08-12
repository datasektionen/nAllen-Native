import { View, Text, StyleSheet } from "react-native"
import React, { useContext, useEffect, useState } from "react"
import { mockGroups } from "../assets/data/mock-group"
import Group from "../components/group"

import { nollan } from "../assets/data/n0llan"
import { UserContext } from "../utils/user"
import { collection, getFirestore, onSnapshot } from "firebase/firestore"
import { WHITE } from "../assets/style/colors"

const Profile = () => {
  const [allMembers, setAllMembers] = useState<any>([])
  const [groupMembers, setGroupMembers] = useState<any>([])
  // user context
  const { user } = useContext(UserContext)




  const setupNewsListener = () => {
    console.log("Setting up groupMembers listener")
    const db = getFirestore();
    const reference = collection(db, 'n0llan');

    let groupMembers = []
    const unsubscribe = onSnapshot(reference, (snapshot) => {
      let members: any[] = []
      let me: any;
      snapshot.forEach(doc => {
        //console.log(doc.data())
        // add doc to members list
        const data = doc.data();
        if (data.email === user!.email) {
          me = data;
        }
        members.push(data)
      })
      if (me) {
        // filter members to only those in the same group as the user
        members = members.filter((member: any) => {
          return member.group === me.group
        })
        console.log('new members:', members)
        setGroupMembers(members)
      }
    })

  }

  // run setupNewsListener when component is mounted
  React.useEffect(() => {
    setupNewsListener()
  }, [])

  // check for when groupMembers, updates
  React.useEffect(() => {
    console.log("Members updated", groupMembers)

  }, [groupMembers])

  return (
    <View>
      {groupMembers.length > 0 ? (
        <Group name={groupMembers[0]["nØllegrupp"]} members={groupMembers} />
      ) : (
        <View style={styles.loading}>
          <Text>Loading groups...</Text>
        </View>
      )}
    </View>
  )
}


export default Profile

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
    justifyContent: "center"
  }
})
