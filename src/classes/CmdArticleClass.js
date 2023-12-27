const CmdArticleSchema = require("../models/CmdArticleModel")

class CmdArticle {

    static async create(CmdArticle) {

        const t = await CmdArticleSchema.create(CmdArticle)
        return t
    }

    static async find() {

        const t = await CmdArticleSchema.find().populate('client').sort({ $natural: -1 }).exec()
        return t
    }

    static async findById(cmdarticle_id) {

        const t = await CmdArticleSchema.findById(cmdarticle_id).exec()
        return t
    }

    static async update(id, cmdarticle) {

        const t = await CmdArticleSchema.updateOne({ _id: id }, { $set: cmdarticle }).exec()
        return t
    }

    static async remove(cmdarticle) {

        const t = await CmdArticleSchema.deleteOne({ _id: cmdarticle }).exec()
        return t
    }

    static async findByClient(clientId) {

        const t = await CmdArticleSchema.find({client: clientId}).sort({ $natural: -1 }).exec()
        return t
    }
}

module.exports = CmdArticle