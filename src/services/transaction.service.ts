import db from '../db/sqlite'

export function fetchTransactions() {
  return db.prepare(`
    SELECT transaction_id, created_at, title, description, amount
    FROM transactions
  `).all()
}
