import { View, Text } from 'react-native'
import React from 'react'
import { Calendar as RNCalendar, CalendarList, Agenda } from 'react-native-calendars'
import { getDatabase, ref as firebaseRef, onValue } from 'firebase/database';



// https://github.com/wix/react-native-calendars
const Calendar: React.FC = () => {

    const setupHighscoreListener = () => {
        const db = getDatabase();
        const reference = firebaseRef(db, 'news');
        onValue(reference, (snapshot) => {
            const news = snapshot.val().news;
            console.log("New high news: " + news);
        });
    }
    return (
        <View>
            <Text>Kalender</Text>
        </View>
    )
}

export default Calendar