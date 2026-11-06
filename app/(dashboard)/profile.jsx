import { useUser } from "../../hooks/useUser";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import { StyleSheet, Text } from "react-native";
import ThemedButton from "../../components/ThemedButton";

const profile = () => {
  const {logout} = useUser()
  return <ThemedView style={styles.container}>
    <Spacer/>
    <ThemedText style={styles.title}>Your Profile</ThemedText>
    <Spacer /> 

    <ThemedButton onPress={logout} >
      <Text style={{color: '#f2f2f2'}}>Logout</Text>
    </ThemedButton>
  </ThemedView>;
};

const styles = StyleSheet.create({
    container : {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }, 
    title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },

})
export default profile;
