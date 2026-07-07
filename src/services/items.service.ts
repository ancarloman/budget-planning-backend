import db from '../db/sqlite'

export function fetchPortfolioItems(portfolioId: string) {
    console.log('Fetching portfolio items with ID:', portfolioId) // Debugging line
  return db.prepare(`
    SELECT *
    FROM items
    WHERE portfolio_id = ?
  `).all(portfolioId)
}

export function addItemToPortfolio (item: { item_id: string; title: string; quantity: number; price: number; spent: number; transactions_id: number; portfolioId: string; created: string }) {
    console.log('Adding item:', item) // Debugging line
  const { item_id, title, quantity, price, spent, transactions_id, portfolioId, created } = item
  return db.prepare(`
    INSERT INTO items (title, quantity, price, spent, portfolio_id)
    VALUES (?, ?, ?, 0, ?)
  `).run(title, quantity, price, portfolioId)
}

export function deleteItemFromPortfolio ( item_id: number ) {
    console.log('Deleting item:', item_id) // Debugging line
  // const { item_id } = item
  return db.prepare(`
    DELETE FROM items
    WHERE item_id = ?
  `).run(item_id)
}