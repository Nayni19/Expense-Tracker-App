import { useContext, useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../styles";
import { ExpenseContext } from "../store/ExpenseContext";
import Icon from "../components/UI/Icon";
import ExpenseForm from "../components/ManageExpenses/ExpenseForm";
import { deleteExpense, storeExpense, updateExpense } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

const ManageExpenses = ({ route, navigation }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  const expenseCtx = useContext(ExpenseContext);
  const id = route.params?.id;
  const isEditing = !!id;

  const selectedData = expenseCtx.expenses.find((expense) => expense.id === id);

  const onCancelHandler = () => {
    navigation.goBack();
  };

  async function onConfirmHandler(expenseData) {
    setIsFetching(true);
    try {
      if (isEditing) {
        expenseCtx.updateExpense(id, expenseData);
        await updateExpense(id, expenseData);
      } else {
        const id = await storeExpense(expenseData);
        expenseCtx.addExpense({ ...expenseData, id: id });
      }
      navigation.goBack();
    } catch (error) {
      setError("Item cannot be added/updated");
      setIsFetching(false);
    }
  }
  async function ondeleteHandler() {
    setIsFetching(true);
    try {
      await deleteExpense(id);
      expenseCtx.deleteExpense(id);
      navigation.goBack();
    } catch (error) {
      setError("Item is not deleted properly");
      setIsFetching(false);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [isEditing, navigation]);

  if ((error && !isFetching)) {
    return <ErrorOverlay message={error} />;
  }
  if (isFetching == true) {
    return <LoadingOverlay color={GlobalStyles.colors.primary800} />;
  }
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
