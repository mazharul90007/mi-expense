import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2024-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.99,
    date: new Date("2024-11-15"),
  },
  {
    id: "e3",
    description: "Groceries",
    amount: 120.5,
    date: new Date("2024-10-10"),
  },
  {
    id: "e4",
    description: "Electricity Bill",
    amount: 75.25,
    date: new Date("2024-09-05"),
  },
  {
    id: "e5",
    description: "Movie Tickets",
    amount: 30.0,
    date: new Date("2024-08-22"),
  },
  {
    id: "e6",
    description: "Gym Membership",
    amount: 45.99,
    date: new Date("2024-07-12"),
  },
  {
    id: "e7",
    description: "Headphones",
    amount: 149.0,
    date: new Date("2024-06-28"),
  },
  {
    id: "e8",
    description: "Coffee",
    amount: 4.5,
    date: new Date("2025-09-28"),
  },
  {
    id: "e9",
    description: "New Phone",
    amount: 799.99,
    date: new Date("2025-09-27"),
  },
  {
    id: "e10",
    description: "Flight Ticket",
    amount: 350.0,
    date: new Date("2024-04-02"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
