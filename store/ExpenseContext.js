import { createContext, useReducer } from "react";

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ desc, amount, date }) => {},
  setExpenses: () => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { desc, amount, date }) => {},
});

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];
    case "SET":
      const inverted = action.payload.reverse();
      return inverted;
    case "UPDATE":
      const updateItemIndex = state.findIndex(
        (expenses) => expenses.id === action.payload.id
      );
      const item = state[updateItemIndex];
      const itemToBeUpdated = { ...item, ...action.payload.data };
      const updatedItem = [...state];
      updatedItem[updateItemIndex] = itemToBeUpdated;
      return updatedItem;

    case "DELETE":
      return state.filter((expenses) => expenses.id !== action.payload);
    default:
      return state;
  }
};

const ExpenseContextProvider = ({ children }) => {
  const [expenseState, dispatch] = useReducer(expenseReducer, []);

  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };

  const setExpenses = (expenses) => {
    dispatch({ type: "SET", payload: expenses });
  };
  const updateExpense = (id, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const value = {
    expenses: expenseState,
    addExpense: addExpense,
    setExpenses: setExpenses,
    updateExpense: updateExpense,
    deleteExpense: deleteExpense,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};

export default ExpenseContextProvider;
