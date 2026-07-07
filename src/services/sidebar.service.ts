import db from '../db/sqlite'

export function fetchPortfolios() {
  return db.prepare(`
    SELECT portfolio_id, title
    FROM portfolios
  `).all()
}
