import { FastifyRequest, FastifyReply } from 'fastify'
import { fetchPortfolio } from '../services/portfolio.service'

export async function getPortfolio(
  _req: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  const portfolio = await fetchPortfolio(_req.params.id)
  reply.send(portfolio)
}
