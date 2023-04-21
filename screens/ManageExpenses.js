import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../styles";
import Button from "../components/Button";

const ManageExpenses = ({ navigation, route }) => {
  const id = route.params?.expenseId;
  const isEditing = !!id;

  const onCancelHandler = () => {};
  const onConfirmHandler = () => {};
  const ondeleteHandler = () => {};

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
        <Ionicons
          size={30}
          name="trash"
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
