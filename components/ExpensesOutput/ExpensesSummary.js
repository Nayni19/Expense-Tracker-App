import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../styles";

const ExpensesSummary = ({ expenses, period }) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View style={styles.root}>
      <Text style={styles.periodText}>{period}</Text>
      <Text style={styles.sumText}>Rs {expensesSum}</Text>
    </View>
  );
};
export default ExpensesSummary;

const styles = StyleSheet.create({
  root: {
    backgroundColor: GlobalStyles.colors.primary100,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingVertical: 12,
    marginVertical: 8,
    borderRadius: 4,
    elevation: 4,
    shadowColor: GlobalStyles.colors.gray500,
    shadowOffset: { width: 1, height: 1 },
  },
  periodText: {
    color: GlobalStyles.colors.primary800,
    fontSize: 16,
  },
  sumText: {
    color: GlobalStyles.colors.primary800,
    fontSize: 18,
    fontWeight: 700,
  },
});
