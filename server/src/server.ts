import Fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'

import { poolRoutes } from './routes/pool'
import { gameRoutes } from './routes/game'
import { userRoutes } from './routes/user'
import { guessRoutes } from './routes/guess'
import { authRoutes } from './routes/auth'

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  })

  await fastify.register(cors, {
    origin: true,
  })

  // Todo - i need to use .env from code secret
  await fastify.register(jwt, {
    secret: 'nlw-cup2022',
  })

  await fastify.register(poolRoutes)
  await fastify.register(authRoutes)
  await fastify.register(guessRoutes)
  await fastify.register(userRoutes)
  await fastify.register(gameRoutes)


  await fastify.listen({ port: 3333, host: '0.0.0.0' })
}

bootstrap()