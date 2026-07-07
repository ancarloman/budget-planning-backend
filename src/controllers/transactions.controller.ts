import { FastifyRequest, FastifyReply } from 'fastify'
import { fetchTransactions } from '../services/transaction.service'

export async function getTransactions(
  _req: FastifyRequest,
  reply: FastifyReply
) {
  const transactions = fetchTransactions()
  reply.send(transactions)
}
