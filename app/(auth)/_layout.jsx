import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import { Colors } from "../../constants/Colors";
import { useUser } from "../../hooks/useUser";


const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  const {user } = useUser();
  console.log("Current user:", user);
  return (
    <>
      <StatusBar value="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
      >
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
