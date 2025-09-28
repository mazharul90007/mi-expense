import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

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
    date: new Date("2024-06-10"),
  },
  {
    id: "e9",
    description: "New Phone",
    amount: 799.99,
    date: new Date("2024-05-18"),
  },
  {
    id: "e10",
    description: "Flight Ticket",
    amount: 350.0,
    date: new Date("2024-04-02"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
