import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import { StyleSheet } from "react-native";

const CreateBooks = () => {
  return <ThemedView style={styles.container}>
    <Spacer/>
    <ThemedText style={styles.title}>Create Books</ThemedText>
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
export default CreateBooks;
