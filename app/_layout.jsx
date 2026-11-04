import {
 
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";
import {StatusBar} from 'expo-status-bar'
import { Stack } from "expo-router";
import { Colors } from "../constants/Colors";
const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <>
      <StatusBar value="auto" />
      <Stack
        screenOptions={{
          headerShown:false,
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.text,
        }}
      >
       
      </Stack>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
