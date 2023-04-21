import { Pressable, StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from "../styles";

const Button = ({ children, mode, style, onPress }) => {
  return (
    <View style={styles.root}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && [styles.pressed]}
      >
        <View>
          <View
            style={
              mode === "flat"
                ? [styles.outerContainer, styles.flatContainer, style]
                : [styles.outerContainer, style]
            }
          >
            <Text
              style={
                mode === "flat"
                  ? [styles.textBox, styles.flatText]
                  : styles.textBox
              }
            >
              {children}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  root: {
    margin: 16,
  },
  outerContainer: {
    padding: 16,
    backgroundColor: GlobalStyles.colors.primary700,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  flatContainer: {
    backgroundColor: "transparent",
  },
  textBox: {
    color: GlobalStyles.colors.primary100,
    fontSize: 16,
    fontWeight: 600,
  },
  flatText: {
    color: GlobalStyles.colors.primary100,
  },
  pressed: {
    opacity: 0.5,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 8,
  },
});
