const CmdArticleModel = require("../models/CmdArticleModel")

class CmdArticle {

    static async create(CmdArticle) {

        const t = await CmdArticleModel.create(CmdArticle)
        return t
    }

    static async find() {

        const t = await CmdArticleModel.find().populate('client').sort({ $natural: -1 }).exec()
        return t
    }

    static async findById(cmdarticle_id) {

        const t = await CmdArticleModel.findById(cmdarticle_id).exec()
        return t
    }

    static async update(id, cmdarticle) {

        const t = await CmdArticleModel.updateOne({ _id: id }, { $set: cmdarticle }).exec()
        return t
    }

    static async remove(cmdarticle) {

        const t = await CmdArticleModel.deleteOne({ _id: cmdarticle }).exec()
        return t
    }

    static async findByClient(clientId) {

        const t = await CmdArticleModel.find({client: clientId}).sort({ $natural: -1 }).exec()
        return t
    }
}

module.exports = CmdArticle