import { View, Text, TouchableHighlight } from "react-native"
import React from "react"

// TODO: remove this :^)
import i from "../import";
const Home = () => {
  return (
    <View>
      <TouchableHighlight onPress={i}>
        <Text>Importera n0llan</Text>
      </TouchableHighlight>
    </View>
  )
}

export default Home
