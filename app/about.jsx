import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Page</Text>
      
      <Link href="/" style={styles.link}>
        Back to Home
      </Link>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  img: {
    marginVertical: 10, 
    width: 80, 
    height: 80
  }, 
  link:{
    marginVertical: 10, 
    fontWeight: "semibold",
    color: "blue"
  }
});
