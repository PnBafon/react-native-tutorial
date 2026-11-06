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
import { useUser } from "../../hooks/useUser";

const login = () => {
  const [email, setEmail] = useState("");
  const [error, setEror] = useState(null)
  const [password, setPassword] = useState("");
  const { user, login } = useUser();

  console.log("Current user:", user);

  const handleSubmit = async () => {
    setEror(null);
    try{
      await login(email, password);
    } catch (error){
      setError(error.message);
    }
  };
  return (
    <TouchableNativeFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <ThemedText style={styles.title} title={true}>
          Login to Your Account
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
  error: {
    color: Colors.warning, 
    padding: 10, 
    backgroundColor: '#f5c1c8', 
    borderColor: Colors.warning,
    borderWidth: 1, 
    borderRadius: 6, 
    marginHorizontal: 10,
  }
});
