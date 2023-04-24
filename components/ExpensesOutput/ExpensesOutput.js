import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../styles";

const ExpensesOutput = ({ expenses, period }) => {
  return (
    <View style={styles.root}>
      <ExpensesSummary expenses={expenses} period={period} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};
export default ExpensesOutput;

const styles = StyleSheet.create({
  root: {
    backgroundColor: GlobalStyles.colors.primary800,
    padding: 16,
    flex: 1,
  },
});
