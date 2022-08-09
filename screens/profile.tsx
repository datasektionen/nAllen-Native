import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { mockGroups } from '../assets/data/mock-group'
import Group, { GroupT, GroupMember } from '../components/group'

const Profile = () => {


    const myGroup = 'Group One'

    return (
        <View>
            {mockGroups.map((group: GroupT) => (
                <Group key={group.name} {...group} />
            ))}
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})