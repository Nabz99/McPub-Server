const ArticleModel = require("../models/ArticleModel")

class Article {

    static async create(article) {

        const t = await ArticleModel.create(article)
        return t
    }
    

    static async find() {

        const t = await ArticleModel.find().sort({ $natural: -1 }).exec()
        return t
    }

    static async findById(article_id) {

        const t = await ArticleModel.findById(article_id).exec()
        return t
    }

    
    static async update(id, article) {

        const t = await ArticleModel.updateOne({ _id: id }, { $set: article }).exec()
        return t
    }

    static async remove(article) {

        const t = await ArticleModel.deleteOne({ _id: article }).exec()
        return t
    }
}

module.exports = Article