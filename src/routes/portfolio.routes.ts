import { FastifyInstance } from 'fastify'
import { getPortfolio } from '../controllers/portfolio.controller'

export default async function portfolioRoutes(app: FastifyInstance) {
  app.get('/portfolio/:id', getPortfolio)
}
