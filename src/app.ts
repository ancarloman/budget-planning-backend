import Fastify from 'fastify'
import cors from './plugins/cors'
import routes from './routes'

export default function buildApp() {
  const app = Fastify({ logger: true })

  app.register(cors)
  app.register(routes, { prefix: '/api' })

  return app
}
