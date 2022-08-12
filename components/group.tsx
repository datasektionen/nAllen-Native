import { View, Text, StyleSheet, FlatList, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BLACK, CERISE_STRONG, WHITE } from '../assets/style/colors'


interface Props {
    name: string
    members: any[]
}

const renderItem = ({ item }: { item: any }) => {
    return (
        <View style={styles.member}>
            <Text style={styles.memberText}>{item.name}</Text>
            <Text style={styles.memberText}>{item.phone}</Text>
        </View>
    )
}


const Group: React.FC<Props> = ({
    name,
    members
}) => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.title}>{name}</Text>
            <FlatList
                data={members}
                renderItem={renderItem}
                keyExtractor={(item: any) => item.kthId}
            />
        </View>



    )
}

export default Group

// styles
const styles = StyleSheet.create({
    mainContainer: {
        display: "flex",
        flexDirection: "column",
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: WHITE,
        height: "auto",
        borderWidth: 1,
        borderColor: "#ccc",
        justifyContent: "space-evenly",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    text: {
        fontSize: 16,
    },
    topRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    date: {
        fontSize: 14,
        color: "#aaa",
        marginLeft: "auto",
    },
    textContainer: {
        marginTop: 10,
        height: "auto"
    },
    authorText: {
        fontSize: 60,
        color: "#ccc",
    },
    member: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    memberText: {
        fontSize: 14,
        color: CERISE_STRONG,

    }
} as const)