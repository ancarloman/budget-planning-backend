import { FastifyInstance } from 'fastify'
import { getPortfolio, patchPortfolioAllottedFund, patchPortfolioTitle } from '../controllers/portfolio.controller'

export default async function portfolioRoutes(app: FastifyInstance) {
  app.get('/:id', getPortfolio)
  app.patch('/:portfolio_id/new-title', patchPortfolioTitle)
  app.patch('/:portfolio_id/new-allotted-fund', patchPortfolioAllottedFund)
}
