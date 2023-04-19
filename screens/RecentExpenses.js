import { StyleSheet, Text, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

const RecentExpenses = () => {
  return (
    <View style={styles.root}>
      <ExpensesOutput period={"Last 7 days"} />
    </View>
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
