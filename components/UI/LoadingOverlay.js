import { ActivityIndicator, StyleSheet, View } from "react-native";

const LoadingOverlay = ({ color }) => {
  return (
    <View style={[styles.root, (backgroundColor = color)]}>
      <ActivityIndicator size={"large"} color={"white"} />
    </View>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
});
