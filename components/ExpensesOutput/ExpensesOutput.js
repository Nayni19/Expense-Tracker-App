import { StyleSheet, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../styles";

const ExpensesOutput = ({ expenses, period, fallbackText }) => {
  let content = <Text style={styles.info}>{fallbackText}</Text>;
  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.root}>
      <ExpensesSummary expenses={expenses} period={period} />
      {content}
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
  info: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 60,
  },
});
