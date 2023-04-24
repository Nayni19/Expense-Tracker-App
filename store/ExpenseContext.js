import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    desc: "Perfume",
    amount: 1250,
    date: new Date("2023-04-19"),
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

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ desc, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { desc, amount, date }) => {},
});

const expenseReducer = (action, state) => {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
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
  const [expenseState, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSES);

  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
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
    updateExpense: updateExpense,
    deleteExpense: deleteExpense,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
  
};

export default ExpenseContextProvider;
