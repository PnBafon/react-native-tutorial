import { SafeAreaView, useColorScheme, View } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import { useSafeArea } from "react-native-safe-area-view";
const ThemedView = ({ style, safe = false, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  if (!safe)
    return (
      <View
        style={[{ backgroundColor: theme.background }, style]}
        {...props}
      />
    );

const insets = useSafeArea()
  return (
    <SafeAreaView
      style={[{ backgroundColor: theme.background,
        paddingTop: insets.top, 
        paddingBottom: insets.bottom

      }, style]}
      {...props}
    />
  );
};

export default ThemedView;
