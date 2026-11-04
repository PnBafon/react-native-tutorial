import { StyleSheet } from "react-native";
// themed components
import ThemedView from "../../components/ThemedView";
import ThemedLogo from "../../components/ThemedLogo";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import { Link } from "expo-router";
import ThemedButton from "../../components/ThemedButton";

const login = () => {
  const handleSubmit = ()=>{
    console.log("Submitting form details")
  }
  return (
    <ThemedView style={styles.container}>
      <Spacer />

      <ThemedText style={styles.title} title={true}>
        Register Your Account
      </ThemedText>

          <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: "#f2f2f2" }}>Login</Text>
    </ThemedButton>

      <Spacer height={100} />
      <Link href="/login">
        <ThemedText style={{ textAlign: "center" }}>
          Login instead
        </ThemedText>
      </Link>
    </ThemedView>
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
