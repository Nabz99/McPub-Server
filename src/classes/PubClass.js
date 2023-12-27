const PubModel = require("../models/PubModel")

class Pub {

    static async create(pub) {

        const t = await PubModel.create(pub)
        return t
    }

    static async find() {

        const t = await PubModel.find().populate('client').sort({ $natural: -1 }).exec()
        return t
    }

    static async findById(pub_id) {

        const t = await PubModel.findById(pub_id).exec()
        return t
    }

    static async update(id, pub) {

        const t = await PubModel.updateOne({ _id: id }, { $set: pub }).exec()
        return t
    }

    static async remove(pub) {

        const t = await PubModel.deleteOne({ _id: pub }).exec()
        return t
    }

    static async findByClient(clientId) {

        const t = await PubModel.find({client: clientId}).sort({ $natural: -1 }).exec()
        return t
    }
}

module.exports = Pub