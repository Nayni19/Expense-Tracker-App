import { FlatList, Text, View } from "react-native";

const renderExpenses = (itemData) => {
  return (
    <View>
      <Text>{itemData.item.desc}</Text>
    </View>
  );
};
const ExpensesList = ({ expenses }) => {
  return <FlatList data={expenses} renderItem={renderExpenses} />;
};
export default ExpensesList;
