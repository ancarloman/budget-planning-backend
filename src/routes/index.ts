import { FastifyInstance } from 'fastify'
import sidebarRoutes from './sidebar.routes'
import transactionRoutes from './transaction.routes'
import portfolioRoutes from './portfolio.routes'
import itemsRoutes from './items.routes'

export default async function routes(app: FastifyInstance) {
  app.register(sidebarRoutes, { prefix: '/sidebar' })
  app.register(transactionRoutes)
  app.register(portfolioRoutes)
  app.register(itemsRoutes, { prefix: '/portfolio/items' })
}
