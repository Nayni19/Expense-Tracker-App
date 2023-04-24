import { StyleSheet, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpenseContext } from "../store/ExpenseContext";

const AllExpenses = () => {
  const expensesCtx = useContext(ExpenseContext);
  return (
    <View style={styles.root}>
      <ExpensesOutput
        expenses={expensesCtx.expenses}
        period="Total"
        fallbackText={"No Expenses Found!"}
      />
    </View>
  );
};

export default AllExpenses;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
