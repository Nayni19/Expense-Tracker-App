import { StyleSheet, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../styles";

const ExpensesOutput = ({ expenses, period }) => {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      desc: "Perfume",
      amount: 1250,
      date: new Date("2023-01-19"),
    },
    {
      id: "e2",
      desc: "Shoes",
      amount: 1500,
      date: new Date("2023-02-01"),
    },
    {
      id: "e3",
      desc: "Stationary",
      amount: 250,
      date: new Date("2023-03-23"),
    },
    {
      id: "e4",
      desc: "Towels",
      amount: 450,
      date: new Date("2023-04-11"),
    },
    {
      id: "e5",
      desc: "Perfume",
      amount: 1250,
      date: new Date("2023-01-19"),
    },
    {
      id: "e6",
      desc: "Shoes",
      amount: 1500,
      date: new Date("2023-02-01"),
    },
    {
      id: "e7",
      desc: "Stationary",
      amount: 250,
      date: new Date("2023-03-23"),
    },
    {
      id: "e8",
      desc: "Towels",
      amount: 450,
      date: new Date("2023-04-11"),
    },
  ];
  return (
    <View style={styles.root}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} period={period} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};
export default ExpensesOutput;

const styles = StyleSheet.create({
  root: {
    backgroundColor: GlobalStyles.colors.primary800,
    padding: 16,
    flex: 1
  },
});
