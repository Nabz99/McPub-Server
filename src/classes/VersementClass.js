const VersementSchema = require("../models/VersementModel")


class Versement {

    static async create(versement) {

        const t = await VersementSchema.create(versement)
        return t
    }
    

    static async find() {

        const t = await VersementSchema.find().populate('client').sort({ $natural: -1 }).exec()
        return t
    }

    static async findById(versement_id) {

        const t = await VersementSchema.findById(versement_id).exec()
        return t
    }

    
    static async update(id, versement) {

        const t = await VersementSchema.updateOne({ _id: id }, { $set: versement }).exec()
        return t
    }

    static async remove(versement) {

        const t = await VersementSchema.deleteOne({ _id: versement }).exec()
        return t
    }

    static async findByClient(clientId) {

        const t = await VersementSchema.find({client: clientId}).sort({ $natural: -1 }).exec()
        return t
    }
}

module.exports = Versement