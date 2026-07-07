import Database from "better-sqlite3";
import * as path from 'path';
import defaultPortfolios from './data/portfolios';
import defaultItems from './data/items';
import defaultTransactions from './data/transactions';
import { spentItems } from './data/spent_items';

const dbPath = path.resolve(process.cwd(), "budget-planning.db");
export const db = new Database(dbPath);
db.pragma("foreign_keys = ON");
db.pragma("journal_mode = WAL");
console.log('Database connected and file created/opened at:', dbPath);


db.prepare(`
  CREATE TABLE IF NOT EXISTS users (
    user_id INTEGER PRIMARY KEY,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    password TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  )
`).run();
console.log('Table "users" created successfully or already exists.');

db.prepare(`
  CREATE TABLE IF NOT EXISTS accounts (
    account_id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    fund REAL NOT NULL DEFAULT 0,
    currency TEXT NOT NULL DEFAULT 'PHP',
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
  )
`).run();
console.log('Table "accounts" created successfully or already exists.');

db.prepare(`
  CREATE TABLE IF NOT EXISTS transactions (
    transaction_id INTEGER PRIMARY KEY,
    account_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    transaction_type TEXT NOT NULL CHECK (transaction_type IN ('portfolio', 'fund_addition', 'fund_deduction')),
    description TEXT NOT NULL,
    amount REAL NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (account_id) REFERENCES accounts(account_id)
  )
`).run();
console.log('Table "transactions" created successfully or already exists.');

db.prepare(`
  CREATE TABLE IF NOT EXISTS portfolios (
    portfolio_id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    account_id INTEGER NOT NULL,
    allotted_fund REAL NOT NULL,
    budgeted_fund REAL NOT NULL,
    spent_fund REAL NOT NULL,
    completed INTEGER NOT NULL DEFAULT 0 CHECK (completed IN (0, 1)),
    archived INTEGER NOT NULL DEFAULT 0 CHECK (archived IN (0, 1)),
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (account_id) REFERENCES accounts(account_id)
  )
`).run();
console.log('Table "portfolios" created successfully or already exists.');

db.prepare(`
  CREATE TABLE IF NOT EXISTS items (
    item_id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    quantity REAL NOT NULL,
    price REAL NOT NULL,
    spent INTEGER NOT NULL DEFAULT 0 CHECK (spent IN (0, 1)),
    transaction_id INTEGER,
    portfolio_id INTEGER NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CHECK (
        (spent = 0 AND transaction_id IS NULL)
        OR
        (spent = 1 AND transaction_id IS NOT NULL)
    ),

    FOREIGN KEY (transaction_id) REFERENCES transactions(transaction_id),
    FOREIGN KEY (portfolio_id) REFERENCES portfolios(portfolio_id)
  )
`).run();
console.log('Table "items" created successfully or already exists.');

db.prepare(`
    INSERT INTO users (firstname, lastname, password)
    SELECT 'Anna', 'Dela Cruz', 'password123'
    WHERE NOT EXISTS (
        SELECT 1 FROM users WHERE firstname = 'Anna' AND lastname = 'Dela Cruz'
    )
`).run();
console.log('Default user inserted successfully or already exists.');

db.prepare(`
    INSERT INTO accounts (user_id, fund, currency)
    SELECT user_id, 10000, 'PHP'
    FROM users
    WHERE firstname = 'Anna' AND lastname = 'Dela Cruz'
    AND NOT EXISTS (
        SELECT 1 FROM accounts WHERE user_id = users.user_id
    )
`).run();
console.log('Default account inserted successfully or already exists.');

// Insert default portfolios into the portfolios table
const insertPortfolio = db.prepare(`
    INSERT INTO portfolios (
        title,
        description,
        account_id,
        allotted_fund,
        budgeted_fund,
        spent_fund
    )
    SELECT ?, ?, account_id, ?, 0, 0
    FROM accounts
    JOIN users ON accounts.user_id = users.user_id
    WHERE users.firstname = 'Anna'
      AND users.lastname = 'Dela Cruz'
      AND NOT EXISTS (
          SELECT 1
          FROM portfolios
          WHERE title = ?
            AND account_id = accounts.account_id
      )
`);

for (const portfolio of defaultPortfolios) {
    insertPortfolio.run(
        portfolio.title,
        portfolio.description,
        portfolio.allotted,
        portfolio.title
    );
    console.log(`${portfolio.title} portfolio inserted successfully or already exists.`);
}

// Insert default transactions into the transactions table
const insertTransaction = db.prepare(`
INSERT INTO transactions (
    account_id,
    title,
    transaction_type,
    description,
    amount
)
SELECT
    account_id,
    ?, ?, ?, ?
FROM accounts
JOIN users ON users.user_id = accounts.user_id
WHERE users.firstname = 'Anna'
  AND users.lastname = 'Dela Cruz'
  AND NOT EXISTS (
      SELECT 1
      FROM transactions
      WHERE title = ?
        AND account_id = accounts.account_id
  )
`);

for (const transaction of defaultTransactions) {
  insertTransaction.run(
    transaction.title,
    transaction.transactionType,
    transaction.description,
    transaction.amount,
    transaction.title
  );
}

// Insert default items into the items table
const insertItem = db.prepare(`
    INSERT INTO items (
        title,
        quantity,
        price,
        spent,
        portfolio_id
    )
    SELECT ?, ?, ?, 0, portfolio_id
    FROM portfolios
    WHERE title = ?
      AND NOT EXISTS (
          SELECT 1
          FROM items
          WHERE title = ?
            AND portfolio_id = portfolios.portfolio_id
      )
`);

for (const item of defaultItems) {
    insertItem.run(
        item.title,
        item.quantity,
        item.price,
        item.portfolioTitle,
        item.title
    );

    console.log(`${item.title} inserted successfully or already exists.`);
}

const updateSpentItem = db.prepare(`
UPDATE items
SET
    spent = 1,
    transaction_id = (
        SELECT transaction_id
        FROM transactions
        WHERE title = ?
        LIMIT 1
    )
WHERE title = ?
`);

for (const item of spentItems) {
    updateSpentItem.run(
        item.transaction,
        item.item
    );
}


// db.close();
// console.log('Database connection closed.');

export default db;