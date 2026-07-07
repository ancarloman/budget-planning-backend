interface DefaultPortfolio {
  title: string;
  description: string;
  allotted: number;
}

const defaultPortfolios: DefaultPortfolio[] = [
  {
    title: "Groceries",
    description: "Monthly grocery shopping",
    allotted: 5000,
  },
  {
    title: "Electricity Bills",
    description: "Monthly electricity bills",
    allotted: 7500,
  },
  {
    title: "Water Bills",
    description: "Monthly water bills",
    allotted: 1500,
  },
  {
    title: "Internet",
    description: "Monthly internet subscription",
    allotted: 2000,
  },
  {
    title: "Rent",
    description: "Monthly house rent",
    allotted: 12000,
  },
  {
    title: "Transportation",
    description: "Daily commuting expenses",
    allotted: 3000,
  },
  {
    title: "Dining Out",
    description: "Restaurants and food trips",
    allotted: 2500,
  },
  {
    title: "Entertainment",
    description: "Movies, games, and subscriptions",
    allotted: 2000,
  },
  {
    title: "Healthcare",
    description: "Medicine and medical expenses",
    allotted: 3000,
  },
  {
    title: "Savings",
    description: "Emergency and future savings",
    allotted: 10000,
  },
  {
    title: "Shopping",
    description: "Clothes and personal purchases",
    allotted: 4000,
  },
  {
    title: "Travel",
    description: "Vacation and travel fund",
    allotted: 5000,
  },
  {
    title: "Miscellaneous",
    description: "Other unexpected expenses",
    allotted: 2000,
  },
];
export default defaultPortfolios;

