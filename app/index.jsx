import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Logo from "../assets/android-icon-foreground.png";
import { Link } from "expo-router";

// themed components
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";
const HOME = () => {
  return (
    <>
      <ThemedView style={styles.container}>
       
       <ThemedLogo />
        <Spacer height={20}/>

        <ThemedText style={styles.title} title={true}>
            Hello, Bafon Precious
        </ThemedText>

        <Spacer height={3}/>
       
       <ThemedText>Reading the Book List</ThemedText>
        
         <Link href="/login" style={styles.link}>
          <ThemedText>Login</ThemedText>
        </Link>
        <Link href="/profile" style={styles.link}>
          <ThemedText>Your Profile</ThemedText>
        </Link>
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
  
    link:{
    marginVertical: 10, 
    fontWeight: "semibold",
   borderBottomWidth: 1,
  
  }
});
