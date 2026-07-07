interface DefaultTransaction {
  title: string;
  transactionType: "portfolio" | "fund_addition" | "fund_deduction";
  description: string;
  amount: number;
}

const defaultTransactions: DefaultTransaction[] = [
  {
    title: "Monthly Grocery Run",
    transactionType: "portfolio",
    description: "Purchased weekly groceries.",
    amount: 3000,
  },
  {
    title: "June Electric Bill",
    transactionType: "portfolio",
    description: "Paid electricity bill.",
    amount: 7500,
  },
  {
    title: "Monthly Water Bill",
    transactionType: "portfolio",
    description: "Paid water bill.",
    amount: 1500,
  },
  {
    title: "Fiber Internet Payment",
    transactionType: "portfolio",
    description: "Paid monthly internet subscription.",
    amount: 2000,
  },
  {
    title: "Apartment Rent",
    transactionType: "portfolio",
    description: "Paid monthly rent.",
    amount: 12000,
  },
  {
    title: "Weekend Movie",
    transactionType: "portfolio",
    description: "Entertainment expense.",
    amount: 1500,
  },
  {
    title: "Clinic Visit",
    transactionType: "portfolio",
    description: "Routine medical check-up.",
    amount: 1500,
  },
  {
    title: "Salary Bonus",
    transactionType: "fund_addition",
    description: "Added extra savings from bonus.",
    amount: 10000,
  },
  {
    title: "Emergency Expense",
    transactionType: "fund_deduction",
    description: "Unexpected repair expense.",
    amount: 2000,
  },
];

export default defaultTransactions;