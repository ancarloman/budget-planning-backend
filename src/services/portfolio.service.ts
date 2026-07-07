import db from '../db/sqlite'

export function fetchPortfolio(portfolioId: string) {
    console.log('Fetching portfolio with ID:', portfolioId) // Debugging line
  return db.prepare(`
    SELECT *
    FROM portfolios
    WHERE portfolio_id = ?
  `).get(portfolioId)
}
