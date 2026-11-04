import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { Stack } from "expo-router";
import { Colors } from "../constants/Colors";
const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.navBackground },
        headerTintColor: theme.text,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="contact"
        options={{
          title: "Contact", headerStyle: { backgroundColor: "red" },
        }}
      />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
