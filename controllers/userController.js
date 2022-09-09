const { user } = require("../models")

class UserController {
    static async getUser(request, reply){
        try {
            const dataUsers = await user.findAll({
                attributes: ["id", "nik", "nama_lengkap", "tempat", "tanggal_lahir"]
            })

            reply.send({
                status: "Sukses",
                data: dataUsers
            })
        } catch (error) {
            reply.send({
                message: error.message
            })
        }
    }

    static async createUser(request, reply){
        try {
            const {
                nik,
                nama_lengkap,
                tempat,
                tanggal_lahir
            } = request.body

            const dataUser = {
                nik,
                nama_lengkap,
                tempat,
                tanggal_lahir
            }

            const newUser = await user.create(dataUser)

            reply.send({
                status: "Sukses",
                data: newUser
            })
        } catch (error) {
            reply.send({
                message: error.message
            })
        }
    }

    static async viewUser(request, reply){
        try {
            const { id } = request.params
            const dataUser = await user.findOne({
                where: {
                    id
                },
                attributes: ["id", "nik", "nama_lengkap", "tempat", "tanggal_lahir"]
            })
            reply.send({
                status: "Sukses",
                data: dataUser
            })
        } catch (error) {
            reply.send({
                message: error.message
            })
        }
    }

    static async updateUSer(request, reply){
        try {
            const { id } = request.params

            const {
                nik,
                nama_lengkap,
                tempat,
                tanggal_lahir
            } = request.body

            const dataUser = {
                nik,
                nama_lengkap,
                tempat,
                tanggal_lahir
            }

            const updateUser = await user.update(dataUser, {
                where: {
                    id
                },
                returning: true
            })
            if(updateUser[0] === 0) throw { message: "Data tidak ditemukan"}
            reply.send({
                status: "Sukses",
                data: updateUser[1][0]
            })
        } catch (error) {
            reply.send({
                message: error.message
            })
        }
    }

    static async deleteUser(request, reply){
        try {
            const { id } = request.params

            const deleteUSer = await user.destroy({
                where: {
                    id
                }
            })

            if(deleteUSer === 0) throw { message: "Data tidak ditemukan"}

            reply.send({
                status: "Sukses",
                data: "Sukses Hapus Data"
            })
        } catch (error) {
            reply.send({
                message: error.message
            })
        }
    }

    static async checkKtp(request, reply){
        try {
            const {
                nik,
                nama_lengkap,
                tempat,
                tanggal_lahir
            } = request.body

            let dataUser = await user.findOne({
                where: {
                    nik,
                    nama_lengkap,
                    tempat,
                    tanggal_lahir: new Date(tanggal_lahir)
                }
            })
            if(!dataUser) throw { message: "Blacklist"}
            reply.send({message: "Clear"})
        } catch (error) {
            reply.send({message: error.message})
        }
    }
}

module.exports = UserController