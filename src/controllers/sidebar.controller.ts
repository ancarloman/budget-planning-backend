import { FastifyRequest, FastifyReply } from 'fastify'
import { fetchPortfolios } from '../services/sidebar.service'

export async function getPortfolios(
  _req: FastifyRequest,
  reply: FastifyReply
) {
  const portfolios = fetchPortfolios()
  reply.send(portfolios)
}
