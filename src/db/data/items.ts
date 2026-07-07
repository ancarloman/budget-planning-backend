interface DefaultItem {
  portfolioTitle: string;
  title: string;
  quantity: number;
  price: number;
}

const defaultItems: DefaultItem[] = [
  // Groceries
  {
    portfolioTitle: "Groceries",
    title: "Rice",
    quantity: 1,
    price: 2000,
  },
  {
    portfolioTitle: "Groceries",
    title: "Vegetables",
    quantity: 1,
    price: 1000,
  },
  {
    portfolioTitle: "Groceries",
    title: "Meat",
    quantity: 1,
    price: 2000,
  },

  // Electricity Bills
  {
    portfolioTitle: "Electricity Bills",
    title: "Monthly Electric Bill",
    quantity: 1,
    price: 7500,
  },

  // Water Bills
  {
    portfolioTitle: "Water Bills",
    title: "Monthly Water Bill",
    quantity: 1,
    price: 1500,
  },

  // Internet
  {
    portfolioTitle: "Internet",
    title: "Fiber Internet Subscription",
    quantity: 1,
    price: 2000,
  },

  // Rent
  {
    portfolioTitle: "Rent",
    title: "Apartment Rent",
    quantity: 1,
    price: 12000,
  },

  // Transportation
  {
    portfolioTitle: "Transportation",
    title: "Fuel / Commute",
    quantity: 20,
    price: 150,
  },

  // Dining Out
  {
    portfolioTitle: "Dining Out",
    title: "Weekend Dinner",
    quantity: 2,
    price: 1250,
  },

  // Entertainment
  {
    portfolioTitle: "Entertainment",
    title: "Streaming Subscription",
    quantity: 1,
    price: 500,
  },
  {
    portfolioTitle: "Entertainment",
    title: "Movie Tickets",
    quantity: 2,
    price: 750,
  },

  // Healthcare
  {
    portfolioTitle: "Healthcare",
    title: "Medicine",
    quantity: 1,
    price: 1500,
  },
  {
    portfolioTitle: "Healthcare",
    title: "Clinic Check-up",
    quantity: 1,
    price: 1500,
  },

  // Savings
  {
    portfolioTitle: "Savings",
    title: "Emergency Fund",
    quantity: 1,
    price: 10000,
  },

  // Shopping
  {
    portfolioTitle: "Shopping",
    title: "Clothing",
    quantity: 2,
    price: 2000,
  },

  // Travel
  {
    portfolioTitle: "Travel",
    title: "Hotel Booking",
    quantity: 1,
    price: 3000,
  },
  {
    portfolioTitle: "Travel",
    title: "Transportation",
    quantity: 1,
    price: 2000,
  },

  // Miscellaneous
  {
    portfolioTitle: "Miscellaneous",
    title: "Unexpected Expense",
    quantity: 1,
    price: 2000,
  },
];
export default defaultItems;