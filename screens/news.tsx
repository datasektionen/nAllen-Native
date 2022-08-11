import { View, Text } from 'react-native'
import React, { cloneElement } from 'react'
import { NewsCard } from '../components'
import { getDatabase, ref as firebaseRef, onValue } from 'firebase/database';

import { collection, getFirestore, onSnapshot } from 'firebase/firestore'

const News = () => {

    const longString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum,`

    const setupNewsListener = () => {
        console.log("Hola")
        const db = getFirestore();
        const reference = collection(db, 'news');
        const unsubscribe = onSnapshot(reference, (snapshot) => {
            console.log(snapshot)
            snapshot.forEach(doc => {
                console.log(doc.data())
            })
        });
    }
    setupNewsListener();


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