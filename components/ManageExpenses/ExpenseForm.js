import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../UI/Button";

const ExpenseForm = ({ onCancel, onSubmit, label }) => {
  const [inputValue, setInputValue] = useState({
    amount: "",
    date: "",
    desc: "",
  });
  const inputHandler = (identifier, enteredText) => {
    setInputValue((currState) => {
      return {
        ...currState,
        [identifier]: enteredText,
      };
    });
  };

  const onSubmitHandler = () => {
    const expenseData = {
      desc: inputValue.desc,
      amount: +inputValue.amount,
      date: new Date(inputValue.date),
    };
    onSubmit(expenseData);
  };
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Your Expenses</Text>

      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: inputHandler.bind(this, "desc"),
          autoCapitalize: "words",
          value: inputValue.desc,
        }}
      />
      <View style={styles.input}>
        <Input
          label="Amount"
          textInputConfig={{
            keyboardType: "number-pad",
            onChangeText: inputHandler.bind(this, "amount"),
            value: inputValue.amount,
          }}
          style={styles.spread}
        />

        <Input
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputHandler.bind(this, "date"),
            value: inputValue.date,
          }}
          style={styles.spread}
        />
      </View>
      <View style={styles.buttons}>
        <Button mode={"flat"} style={styles.buttonStyle} onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.buttonStyle} onPress={onSubmitHandler}>
          {label}
        </Button>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  root: {
    marginTop: 40,
    // margin: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: 700,
    color: "white",
    textAlign: "center",
    marginBottom: 16,
  },
  input: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  spread: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    // marginHorizontal: 10,
    justifyContent: "space-between",
    marginVertical: 20,
  },
  buttonStyle: {
    minWidth: 150,
  },
});
