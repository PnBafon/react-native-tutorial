import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Logo from "../assets/android-icon-foreground.png";
import { Link } from "expo-router";
const HOME = () => {
  return (
    <>
      <View style={styles.container}>
        <Image source={Logo} style={styles.img} />
        <Text style={[styles.title, { marginBottom: 10 }]}>
          Hello Bafon Precious
        </Text>
        <Text>Reading the List of Books</Text>
        
        <Link href="/about" style={styles.link}>
          About Page
        </Link>
      </View>
    </>
  );
};

export default HOME;

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
    height: 80,
  },
    link:{
    marginVertical: 10, 
    fontWeight: "semibold",
    color: "blue",
   borderBottomWidth: 1,
   borderColor: 'blue'
  }
});
