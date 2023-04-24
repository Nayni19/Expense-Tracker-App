import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../styles";
import Button from "../components/Button";
import { ExpenseContext } from "../store/ExpenseContext";
import Icon from "../UI/Icon";

const ManageExpenses = ({ route, navigation }) => {
  const expenseCtx = useContext(ExpenseContext);
  const id = route.params?.id;
  const isEditing = !!id;

  const onCancelHandler = () => {
    navigation.goBack();
  };
  const onConfirmHandler = () => {
    if (isEditing) {
      expenseCtx.updateExpense(id, {
        desc: "Textt",
        amount: 200,
        date: new Date("2023-04-21"),
      });
    } else {
      expenseCtx.addExpense({
        desc: "Textt!!",
        amount: 200,
        date: new Date("2023-04-21"),
      });
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
      <View style={styles.buttons}>
        <Button
          mode={"flat"}
          style={styles.buttonStyle}
          onPress={onCancelHandler}
        >
          Cancel
        </Button>
        <Button style={styles.buttonStyle} onPress={onConfirmHandler}>
          {isEditing ? "Confirm" : "Add"}
        </Button>
      </View>
      <View style={styles.delContainer}>
        <Icon
          size={30}
          icon="trash"
          color={GlobalStyles.colors.primary100}
          onPress={ondeleteHandler}
        />
      </View>
    </View>
  );
};

export default ManageExpenses;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  delContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    margin: 16,
    borderTopWidth: 1,
    borderTopColor: GlobalStyles.colors.primary100,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonStyle: {
    minWidth: 150,
  },
});
