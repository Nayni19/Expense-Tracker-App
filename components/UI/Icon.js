import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Icon = ({ icon, size, color, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.press}
    >
      <View style={styles.root}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
};

export default Icon;

const styles = StyleSheet.create({
  root: {
    padding: 8,
    marginHorizontal: 4,
  },
  press: {
    opacity: 0.75,
  },
});
