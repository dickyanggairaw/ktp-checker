const UserController = require("../controllers/userController")

const userRoute = async(fastify,_, done ) => {
    fastify.post("/cek", UserController.checkKtp)
    fastify.get("/", UserController.getUser)
    fastify.post("/", UserController.createUser)
    fastify.get("/:id", UserController.viewUser)
    fastify.put("/:id", UserController.updateUSer)
    fastify.delete("/:id", UserController.deleteUser)
    done()
}

module.exports = userRoute