import { View, Text } from 'react-native'
import React, { cloneElement } from 'react'
import { NewsCard } from '../components'
import { getDatabase, ref as firebaseRef, onValue } from 'firebase/database';

import { collection, getFirestore, onSnapshot } from 'firebase/firestore'

const News = () => {
    const [news, setNews] = React.useState<any[]>([])
    const longString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum,`

    const setupNewsListener = () => {
        console.log("Setting up news listener")
        const db = getFirestore();
        const reference = collection(db, 'news');
        const unsubscribe = onSnapshot(reference, (snapshot) => {
            console.log(snapshot)
            snapshot.forEach(doc => {
                console.log(doc.data())
                let entries = doc.data().entries;
                // map entries.createdAt to entries.createdAt.seconds
                entries = entries.map((entry: any) => {
                    const seconds = entry.createdAt.seconds;
                    const date = new Date(seconds * 1000);
                    const formattedDate = date.toLocaleDateString();
                    entry.createdAt = formattedDate;
                    return entry;
                }).sort((a: any, b: any) => b.createdAt - a.createdAt);



                setNews(entries)
            })
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
        }
        )

    }, [news])


    return (
        <View>

            {/* redraw the news when fetched */}
            {news.map((item, index) => {
                return (
                    <NewsCard key={index} title={item.title} text={item.body} date={item.createdAt} author={item.author} />
                )
            })}


        </View>
    )
}


export default News