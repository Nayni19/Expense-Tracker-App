import { StyleSheet, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import { ExpenseContext } from "../store/ExpenseContext";
import { recentDays } from "../util/date";
import { fetchExpense } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { GlobalStyles } from "../styles";
import ErrorOverlay from "../components/UI/ErrorOverlay";

const RecentExpenses = () => {
  const [error, setError] = useState();
  const [isFetching, setIsFetching] = useState(true);
  const expensesCtx = useContext(ExpenseContext);

  useEffect(() => {
    async function getData() {
      setIsFetching(true);
      try {
        const expenses = await fetchExpense();
        expensesCtx.setExpenses(expenses);
      } catch (error) {
        setError("Data is not being fetched properly!");
      }
      setIsFetching(false);
    }
    getData();
  }, []);

  const recentExpensesHandler = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const recent = recentDays(today, 7);
    return expense.date >= recent;
  });

  if (error && !!isFetching) {
    <ErrorOverlay message={error} />;
  }

  if (isFetching == true) {
    return <LoadingOverlay color={GlobalStyles.colors.primary700} />;
  }

  return (
    <View style={styles.root}>
      <ExpensesOutput
        expenses={recentExpensesHandler}
        period="Last 7 days"
        fallbackText={"No Recent Expenses Registered!"}
      />
    </View>
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
