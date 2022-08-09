import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { WHITE } from '../assets/style/colors'




export type GroupMember = {
    name: string,
    phone: string,
    groupName: string,
}

export type GroupT = {
    name: string,
    members: GroupMember[],
}


const Group: React.FC<GroupT> = ({ name, members }) => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.title}>{name}</Text>
            <View style={styles.membersContainer}>
                {members.map((member, index) => (
                    <View style={styles.memberContainer} key={index}>
                        <Text style={styles.memberName}>{member.name}</Text>
                        <Text style={styles.memberPhone}>{member.phone}</Text>
                    </View>
                ))}
            </View>
        </View>
    )
}

export default Group

// style
const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: WHITE,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    membersContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 10,
        height: 'auto'
    },
    memberContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    memberName: {
        fontSize: 16,
    },
    memberPhone: {
        fontSize: 12,
        fontWeight: 'bold',
    },
})

