import { View, Text } from "react-native"
import React, { useContext, useEffect, useState } from "react"
import { mockGroups } from "../assets/data/mock-group"
import Group from "../components/group"

import { nollan } from "../assets/data/n0llan"
import { UserContext } from "../utils/user"

const Profile = () => {
  const [groupMembers, setGroupMembers] = useState<any>([])
  // user context
  const { user } = useContext(UserContext)



  useEffect(() => {
    if (user) {
      const me = nollan.find((member: any) => member["E-postadress"] === user.email)
      if (me) {
        const nolleGroupMembers = nollan.filter((member: any) => {
          return member["nØllegrupp"] === me["nØllegrupp"]
        })
        setGroupMembers(nolleGroupMembers)
      }
    }
  }, [])

  // log group members when they update
  useEffect(() => {
    console.log("Group members updated", groupMembers)
    if (groupMembers[0]) {
      console.log(groupMembers[0])
    }
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
