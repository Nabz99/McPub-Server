const ClientModel = require("../models/ClientModel")
const bcrypt = require("bcrypt")

class Client {

    static async create(client) {

        client.password = await bcrypt.hash(client.password, 10)
        const t = await ClientModel.create(client)
        return t
    }

    static async find() {

        const t = await ClientModel.find().sort({ $natural: -1 }).exec()
        return t
    }

    static async findById(client_id) {

        const t = await ClientModel.findById(client_id).exec()
        return t
    }

    static async update(id, client) {
        client.password = await bcrypt.hash(client.password, 10)
        const t = await ClientModel.updateOne({ _id: id }, { $set: client }).exec()
        return t
    }

    static async remove(client) {

        const t = await ClientModel.deleteOne({ _id: client }).exec()
        return t
    }

    static async findByEmail(email) {

        const t = await ClientModel.findOne({ email: email }).exec()
        return t
    }
}

module.exports = Client