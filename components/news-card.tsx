import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React, { useState } from "react"
import { CERISE_STRONG, WHITE } from "../assets/style/colors"
import Icon from "./icon"

type Props = {
  title: string,
  text: string,
  date: string,
  author?: string,
}

const NewsCard: React.FC<Props> = ({ title, text, date, author }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const limit = 100
  const isLong = text.length > limit

  const shortText = isLong ? text.substring(0, limit) + "..." : text

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }


  return (
    <View style={styles.mainContainer}>
      <View style={styles.topRow}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        {/* button to expand content */}

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
          <Text style={styles.text}>{shortText}</Text>
          :
          <Text style={styles.text}>{text}</Text>
        }
        {author && <Text style={styles.authorText}>Author: {author}</Text>}
      </View>
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
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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

