import { FastifyRequest, FastifyReply } from 'fastify'
import { addItemToPortfolio, deleteItemFromPortfolio, fetchPortfolioItems } from '../services/items.service'

export async function getPortfolioItems(
  _req: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  const portfolioItems = await fetchPortfolioItems(_req.params.id)
  reply.send(portfolioItems)
}

export async function postItem(
  _req: FastifyRequest<{ Body: { item_id: string; title: string; quantity: number; price: number; spent: number; transactions_id: number; portfolioId: string; created: string } }>,
  reply: FastifyReply
) {
  const newItem = await addItemToPortfolio(_req.body)
  reply.send(newItem)
}

export async function deleteItem(
  _req: FastifyRequest<{ Params: { item_id: number } }>,
  reply: FastifyReply
) {
  const newItem = await deleteItemFromPortfolio(_req.params.item_id)
  reply.send(newItem)
}
