import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

const renderExpenses = (itemData) => {
  return <ExpenseItem {...itemData.item} />;
};
const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenses}
      keyExtractor={(item) => item.id}
    />
  );
};
export default ExpensesList;
