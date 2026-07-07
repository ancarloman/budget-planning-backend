import { FastifyInstance } from 'fastify'
import { getTransactions } from '../controllers/transactions.controller'

export default async function transactionRoutes(app: FastifyInstance) {
  app.get('/transactions', getTransactions)
}
