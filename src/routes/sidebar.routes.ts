import { FastifyInstance } from 'fastify'
import { getPortfolios } from '../controllers/sidebar.controller'

export default async function sidebarRoutes(app: FastifyInstance) {
  app.get('/portfolios', getPortfolios)
}
