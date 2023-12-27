const VersementModel = require("../models/VersementModel")


class Versement {

    static async create(versement) {

        const t = await VersementModel.create(versement)
        return t
    }
    

    static async find() {

        const t = await VersementModel.find().populate('client').sort({ $natural: -1 }).exec()
        return t
    }

    static async findById(versement_id) {

        const t = await VersementModel.findById(versement_id).exec()
        return t
    }

    
    static async update(id, versement) {

        const t = await VersementModel.updateOne({ _id: id }, { $set: versement }).exec()
        return t
    }

    static async remove(versement) {

        const t = await VersementModel.deleteOne({ _id: versement }).exec()
        return t
    }

    static async findByClient(clientId) {

        const t = await VersementModel.find({client: clientId}).sort({ $natural: -1 }).exec()
        return t
    }
}

module.exports = Versement