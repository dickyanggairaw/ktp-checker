const fastify = require("fastify")({
    logger: true
})

fastify.register(require("./routes/user"), { prefix: '/user' })

fastify.get("/", (request, reply) => {
    reply.send({
        msg: "KTP Checker",
        data: {
          status: "Health Check Success",
          date: new Date(),
          uptime: new Date().getTime(),
        },
      })
})


fastify.listen({
    port: 3000
},
    (err, address) => {
        if (err) {
            fastify.log.error(err)
            process.exit(1)
          }
        console.log(`Server is now listening on ${address}`)
    }
)