import { View, Text, StyleSheet } from 'react-native'
import React, { cloneElement } from 'react'
import { NewsCard } from '../components'
import { getDatabase, ref as firebaseRef, onValue } from 'firebase/database';

import { collection, getFirestore, onSnapshot } from 'firebase/firestore'
import { WHITE } from '../assets/style/colors';

const News = () => {
    const [news, setNews] = React.useState<any[]>([])
    const longString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum,`

    const setupNewsListener = () => {
        console.log("Setting up news listener")
        const db = getFirestore();
        const reference = collection(db, 'news');
        const unsubscribe = onSnapshot(reference, (snapshot) => {
            console.log(snapshot)

            let entries: any[] = []
            snapshot.forEach(doc => {
                const data = doc.data();
                entries.push(data)
                // map entries.createdAt to entries.createdAt.seconds
            })
            entries = entries.map((entry: any) => {
                const seconds = entry.createdAt.seconds;
                const date = new Date(seconds * 1000);
                const formattedDate = date.toLocaleDateString();
                entry.createdAt = formattedDate;
                return entry;
            }).sort((a: any, b: any) => b.createdAt - a.createdAt);
            setNews(entries)
        });
    }


    // run setupNewsListener when component is mounted
    React.useEffect(() => {
        setupNewsListener()
    }, [])

    // check for when news, updates
    React.useEffect(() => {
        console.log("News updated", news)
        news.map((item, index) => {
            console.log(item)
        })
    }, [news])


    return (
        <View>

            {/* redraw the news when fetched */}
            {news.map((item, index) => {
                return (
                    <NewsCard key={index} title={item.title} text={item.body} date={item.createdAt} author={item.author} />
                )
            })}

            {
                news.length === 0 && (
                    <Text style={styles.loading}>Loading news...</Text>
                )
            }


        </View >
    )
}


export default News

const styles = StyleSheet.create({
    loading: {
        display: "flex",
        flexDirection: "column",
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: WHITE,
        alignItems: "center",
        justifyContent: "center"
    }
})
