import { View, Text } from 'react-native'
import React from 'react'
import { NewsCard } from '../components'

const News = () => {

    const longString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum,`

    return (
        <View>
            <NewsCard
                title="Nyheter"
                text={longString}
                date="2022-08-01"
            />
            <NewsCard
                title="Nyheter"
                text={"Hola"}
                date="2022-08-01"
            />
            <NewsCard
                title="Nyheter"
                text={longString}
                date="2022-08-01"
                author="John Doe"
            />
        </View>
    )
}

export default News