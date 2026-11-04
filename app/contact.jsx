import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'
const Contact = () => {
  return (
    <View>
      <Text>Contact Page</Text>

      <Link href={"/"}> Back to Home</Link>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({})