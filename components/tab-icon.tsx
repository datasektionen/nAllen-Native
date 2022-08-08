import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from './icon'
import { CERISE_LIGHT, CERISE_STRONG } from '../assets/style/colors'

type IconT = {
    name: string,
    text: string,
    focused: boolean,
}

const TabIcon: React.FC<IconT> = ({ name, text, focused }) => {
    const iconColor = focused ? CERISE_STRONG : CERISE_LIGHT;

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
        display: 'flex',
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