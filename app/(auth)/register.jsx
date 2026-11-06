import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
// themed components
import ThemedView from "../../components/ThemedView";
import ThemedLogo from "../../components/ThemedLogo";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import { Link } from "expo-router";
import ThemedButton from "../../components/ThemedButton";
import ThemeInput from "../../components/ThemeInput";
import { useState, useEffect } from "react";
import { useUser } from "../../hooks/useUser";
import { Colors } from "../../constants/Colors";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState("");

  const {  register } = useUser();

  const handleSubmit = async () => {
    setError(null)
    try {
      await register(email, password);
    } catch (error) {
      console.log("logged error",error.message);
      setError(error.message)
      
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <ThemedText style={styles.title} title={true}>
          Register Your Account
        </ThemedText>
        <Spacer />
        {error && <ThemedText style={styles.error}>{error}</ThemedText>}
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
    </TouchableWithoutFeedback>
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
  error: {
    color: Colors.warning,
    padding: 10,
    backgroundColor: "#f5c1c8",
    borderColor: Colors.warning,
    borderWidth: 1,
    borderRadius: 6,
    marginHorizontal: 10,
  },
});
