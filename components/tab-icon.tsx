import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from './icon'

type IconT = {
    name: string,
    text: string,
    focused: boolean,
}

const TabIcon: React.FC<IconT> = ({ name, text, focused }) => {
    const iconColor = focused ? 'green' : 'blue'

    return (
        <View style={styles.iconMenu} >
            <Icon name={name} size={16} color={iconColor} />
            <Text style={[styles.tabButtonText, { color: iconColor }]}>{text}</Text>
        </View >
    )
}

export default TabIcon


const styles = StyleSheet.create({
    iconMenu: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    tabButtonText: {
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 10,
    }
})