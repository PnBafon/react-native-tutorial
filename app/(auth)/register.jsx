import { StyleSheet, Text } from "react-native";
// themed components
import ThemedView from "../../components/ThemedView";
import ThemedLogo from "../../components/ThemedLogo";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import { Link } from "expo-router";
import ThemedButton from "../../components/ThemedButton";
import ThemeInput from "../../components/ThemeInput";
import { useState, useEffect } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    const body = { email, password, confirmPassword };
    console.log("Submitting form details", body);
  };
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title} title={true}>
        Register Your Account
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
      <ThemeInput
        style={{ width: "80%", marginBottom: 20 }}
        placeholder="Confirm Password"
        keyboardType="password"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: "#f2f2f2" }}>Register</Text>
      </ThemedButton>

      <Spacer height={100} />
      <Link href="/login">
        <ThemedText style={{ textAlign: "center" }}>Login instead</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Register;

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
