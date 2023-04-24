import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../styles";

const Input = ({ label, textInputConfig, style }) => {
  const inputStyle = [styles.textInput];
  if (textInputConfig && textInputConfig.multiline) {
    inputStyle.push(styles.multiLine);
  }
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.labelText}>{label}</Text>
      <TextInput {...textInputConfig} style={inputStyle} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 5,
    marginVertical: 8,
  },
  labelText: {
    fontSize: 16,
    color: GlobalStyles.colors.primary100,
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 6,
    padding: 16,
    color: GlobalStyles.colors.primary700,
    fontSize: 18,
  },
  multiLine: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
