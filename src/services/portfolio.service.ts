import db from '../db/sqlite'

export function fetchPortfolio(portfolioId: string) {
    console.log('Fetching portfolio with ID:', portfolioId) // Debugging line
  return db.prepare(`
    SELECT *
    FROM portfolios
    WHERE portfolio_id = ?
  `).get(portfolioId)
}

export function updatePortfolioTitle(portfolio: { portfolio_id: number; title: string }) {
    console.log('Updating portfolio title with ID:', portfolio.portfolio_id) // Debugging line
  const { portfolio_id, title } = portfolio
  return db.prepare(`
    UPDATE portfolios
    SET title = ?
    WHERE portfolio_id = ?
  `).run(title, portfolio_id)
}

export function updatePortfolioAllottedFund(portfolio: { portfolio_id: number; allotted_fund: number }) {
    console.log('Updating portfolio allotted fund with ID:', portfolio.portfolio_id) // Debugging line
  const { portfolio_id, allotted_fund } = portfolio
  return db.prepare(`
    UPDATE portfolios
    SET allotted_fund = ?
    WHERE portfolio_id = ?
  `).run(allotted_fund, portfolio_id)
}