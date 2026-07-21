import { FastifyInstance } from 'fastify'
import { deleteItem, getPortfolioItems, postItem } from '../controllers/items.controller'

export default async function itemsRoutes(app: FastifyInstance) {
  app.get('/:id', getPortfolioItems)
  app.post('/add-item', postItem);
  app.delete('/delete-item/:item_id', deleteItem);
}
