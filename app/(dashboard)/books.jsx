import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import { StyleSheet } from "react-native";

const profile = () => {
  return <ThemedView style={styles.container} safe={true}>
    <Spacer/>
    <ThemedText style={styles.title}>Your Reading List</ThemedText>
  </ThemedView>;
};

const styles = StyleSheet.create({
    container : {
        flex: 1, 
        // justifyContent: 'center', 
        alignItems: 'center'
    }, 
    title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },

})
export default profile;
