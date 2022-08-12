import { View, Text } from "react-native"
import React, { useContext, useEffect, useState } from "react"
import { mockGroups } from "../assets/data/mock-group"
import Group from "../components/group"

import { nollan } from "../assets/data/n0llan"
import { UserContext } from "../utils/user"
import { collection, getFirestore, onSnapshot } from "firebase/firestore"

const Profile = () => {
  const [groupMembers, setGroupMembers] = useState<any>([])
  // user context
  const { user } = useContext(UserContext)




  const setupNewsListener = () => {
    console.log("Setting up groupMembers listener")
    const db = getFirestore();
    const reference = collection(db, 'n0llan');

    const me = user!.email;



    const unsubscribe = onSnapshot(reference, (snapshot) => {
      console.log(snapshot)
      snapshot.forEach(doc => {
        console.log(doc.data())

      })
    });
  }

  // run setupNewsListener when component is mounted
  React.useEffect(() => {
    setupNewsListener()
  }, [])

  // check for when groupMembers, updates
  React.useEffect(() => {
    console.log("News updated", groupMembers)
    groupMembers.map((item, index) => {
      console.log(item)
    })
  }, [groupMembers])
  return (
    <View>
      {groupMembers.length > 0 ? (
        <Group name={groupMembers[0]["nØllegrupp"]} members={groupMembers} />
      ) : <Text>No group</Text>}
    </View>
  )
}

export default Profile
