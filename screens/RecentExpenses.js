import { StyleSheet, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpenseContext } from "../store/ExpenseContext";
import { recentDays } from "../util/date";

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpenseContext);

  const recentExpensesHandler = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const recent = recentDays(today, 7);

    return expense.date >= recent && expense.date < today;
  });

  return (
    <View style={styles.root}>
      <ExpensesOutput expenses={recentExpensesHandler} period="Last 7 days" />
    </View>
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
