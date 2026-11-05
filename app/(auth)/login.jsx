import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  Keyboard,
  TouchableNativeFeedback,
} from "react-native";
// themed components
import ThemedView from "../../components/ThemedView";
import ThemedLogo from "../../components/ThemedLogo";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import { Link } from "expo-router";
import { Colors } from "../../constants/Colors";
import ThemedButton from "../../components/ThemedButton";
import ThemeInput from "../../components/ThemeInput";
import { useState, useEffect } from "react";
const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const body = { email, password };
    console.log("Submitting form details", body);
  };
  return (
    <TouchableNativeFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <ThemedText style={styles.title} title={true}>
          Login to Your Account
        </ThemedText>
        <Spacer />

        <ThemeInput
          style={{ width: "80%", marginBottom: 20 }}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <ThemeInput
          style={{ width: "80%", marginBottom: 20 }}
          placeholder="Password"
          keyboardType="password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <ThemedButton onPress={handleSubmit}>
          <Text style={{ color: "#f2f2f2" }}>Login</Text>
        </ThemedButton>

        <Spacer height={100} />
        <Link href="/register">
          <ThemedText style={{ textAlign: "center" }}>
            Register instead
          </ThemedText>
        </Link>
      </ThemedView>
    </TouchableNativeFeedback>
  );
};

export default login;

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
});
