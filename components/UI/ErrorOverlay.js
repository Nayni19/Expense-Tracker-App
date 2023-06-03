import { Text, StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../styles";

const ErrorOverlay = ({ message }) => {
  return (
    <View style={styles.root}>
      <Text style={[styles.text, styles.title]}>An error occurrred !!</Text>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

export default ErrorOverlay;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  text: {
    color: "white",
    textAlign: "center",
    marginBottom: 10,
  },
});
