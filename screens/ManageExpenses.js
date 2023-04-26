import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../styles";
import { ExpenseContext } from "../store/ExpenseContext";
import Icon from "../components/UI/Icon";
import ExpenseForm from "../components/ManageExpenses/ExpenseForm";

const ManageExpenses = ({ route, navigation }) => {
  const expenseCtx = useContext(ExpenseContext);
  const id = route.params?.id;
  const isEditing = !!id;

  const selectedData = expenseCtx.expenses.find((expense) => expense.id === id);

  const onCancelHandler = () => {
    navigation.goBack();
  };
  const onConfirmHandler = (expenseData) => {
    if (isEditing) {
      expenseCtx.updateExpense(id, expenseData);
    } else {
      expenseCtx.addExpense(expenseData);
    }
    navigation.goBack();
  };
  const ondeleteHandler = () => {
    expenseCtx.deleteExpense(id);
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [isEditing, navigation]);

  return (
    <View style={styles.root}>
      <ExpenseForm
        onCancel={onCancelHandler}
        label={isEditing ? "Confirm" : "Add"}
        onSubmit={onConfirmHandler}
        defaultValue={selectedData}
      />

      {isEditing && (
        <View style={styles.delContainer}>
          <Icon
            size={30}
            icon="trash"
            color={GlobalStyles.colors.error500}
            onPress={ondeleteHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpenses;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary800,
    padding: 20,
  },
  delContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: GlobalStyles.colors.primary100,
  },
});
