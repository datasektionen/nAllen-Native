import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    title: string,
    description: string,
    date: string,
}


const NewsCard: React.FC = () => {
    return (
        <View>
            <Text>Nyheter</Text>
        </View>
    )
}


export default NewsCard

const styles = StyleSheet.create({})