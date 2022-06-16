const fastify = require('fastify')({ logger: false })
const PORT = process.env.PORT || 3000

// Run the server!
const start = async () => {
  try {
    await fastify.listen({port: PORT})
    console.log(`Server started in port ${PORT}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}
start()