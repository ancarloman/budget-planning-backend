import { FastifyRequest, FastifyReply } from 'fastify'
import { fetchPortfolio, updatePortfolioTitle, updatePortfolioAllottedFund } from '../services/portfolio.service'

export async function getPortfolio(
  _req: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  const portfolio = await fetchPortfolio(_req.params.id)
  reply.send(portfolio)
}

export async function patchPortfolioTitle(
  _req: FastifyRequest<{ Body: { portfolio_id: number; title: string } }>,
  reply: FastifyReply
) {
  const newTitle = await updatePortfolioTitle(_req.body)
    reply.send(newTitle)
}

export async function patchPortfolioAllottedFund(
  _req: FastifyRequest<{ Body: { portfolio_id: number; allotted_fund: number } }>,
  reply: FastifyReply
) {
  await updatePortfolioAllottedFund(_req.body)
  reply.status(204).send()
}

