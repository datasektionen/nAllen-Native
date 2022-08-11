import { View } from "react-native"
import React from "react"
import { mockGroups } from "../assets/data/mock-group"
import Group, { GroupT } from "../components/group"

const Profile = () => {
  return (
    <View>
      {mockGroups.map((group: GroupT) => (
        <Group key={group.name} {...group} />
      ))}
    </View>
  )
}

export default Profile
