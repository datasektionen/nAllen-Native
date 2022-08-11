import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React, { useState } from "react"
import { WHITE } from "../assets/style/colors"

type Props = {
  title: string,
  text: string,
  date: string,
  author?: string,
}

const NewsCard: React.FC<Props> = ({ title, text, date, author }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={() => setIsExpanded(e => !e)}>
        <View style={styles.topRow}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{date}</Text>

        </View>
        <View style={styles.textContainer}>
          <Text numberOfLines={isExpanded ? 0 : 1} style={styles.text}>{text}</Text>
          {author && <Text style={styles.authorText}>Author: {author}</Text>}
        </View>
      </TouchableOpacity>
    </View >
  )
}

export default NewsCard

const styles = StyleSheet.create({

  mainContainer: {
    display: "flex",
    flexDirection: "column",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: WHITE,
    height: "auto",
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "space-evenly",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  text: {
    fontSize: 16,
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  date: {
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: "auto",
  },

  textContainer: {
    marginTop: 10,
    height: "auto"
  },

  authorText: {
    fontSize: 14,
    color: "#ccc",
  },

  upsideDown: {
    transform: [{ rotate: "180deg" }],
  },
})

