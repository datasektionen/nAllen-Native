import { View } from "react-native";
import React, { useState, useEffect } from "react";
import { NewsCard } from "../components";
import { collection, query, orderBy, getFirestore, Timestamp, onSnapshot } from "firebase/firestore";

const dateToSring = (date: Timestamp) => {
  const d = date.toDate();
  return d.toLocaleString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long"
  });
};

type NewsItem = {
  id: string,
  title: string,
  text: string,
  date: string,
};

const News = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  useEffect(() => {
    const news = query(
      collection(getFirestore(), "news"),
      orderBy("date", "desc"),
    );
    return onSnapshot(news, docs => {
      setNews([]);
      docs.forEach(n => setNews(old => [...old, {
        id: n.id,
        title: n.data().title,
        text: n.data().text,
        date: dateToSring(n.data().date),
      }]));
    });
  }, []);

  return (
    <View>
      {news.map(({ id, title, text, date }) =>
        <NewsCard key={id} title={title} text={text} date={date} />
      )}
    </View>
  )
};

export default News;
