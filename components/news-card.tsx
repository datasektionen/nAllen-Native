import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { CERISE_STRONG, WHITE } from '../assets/style/colors'
import Icon from './icon'

type Props = {
    title: string,
    text: string,
    date: string,
}


const NewsCard: React.FC<Props> = ({ title, text, date }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const toggleExpanded = () => setIsExpanded(!isExpanded)

    const maxChars = 50
    const isLong = text.length > maxChars
    const preview = isLong ? text.slice(0, maxChars) + '...' : text

    return (
        <View style={styles.mainContainer}>
            <View style={styles.topRow}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
                <TouchableOpacity onPress={toggleExpanded}>

                    {isLong && !isExpanded ?
                        <Icon name="chevron-down" size={24} color={CERISE_STRONG} />
                        : isLong ?
                            <Icon name="close" size={24} color={CERISE_STRONG} />
                            : null
                    }
                </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
                {!isExpanded ?
                    <Text style={styles.text}>{preview}</Text>
                    :
                    <Text style={styles.text}>{text}</Text>
                }
            </View>
        </View >
    )
}


export default NewsCard

const styles = StyleSheet.create({

    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: WHITE,
        height: 'auto',
        borderWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'space-evenly',
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    text: {
        fontSize: 16,
    },

    topRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    date: {
        fontSize: 12,
        fontWeight: 'bold',
    },

    textContainer: {
        marginTop: 10,
        height: 'auto'
    },

})