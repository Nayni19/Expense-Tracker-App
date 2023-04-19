import { StyleSheet, Text, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

const AllExpenses = () => {
  return (
    <View style={styles.root}>
      <ExpensesOutput period={"Total"} />
    </View>
  );
};

export default AllExpenses;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
