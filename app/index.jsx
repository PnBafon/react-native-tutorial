import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Logo from "../assets/android-icon-foreground.png";
import { Link } from "expo-router";

// themed components
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
const HOME = () => {
  return (
    <>
      <ThemedView style={styles.container}>
       
       <ThemedLogo />


        <Text style={[styles.title]}>
          Hello Bafon Precious
        </Text>
        <Spacer height={3}/>
        <Text>Reading the List of Books</Text>
        
       <View style={{flex:'row',}}>
         <Link href="/about" style={styles.link}>
          About Page
        </Link>
        <Link href="/contact" style={styles.link}>
          Contact Page
        </Link>
       </View>
      </ThemedView>
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
