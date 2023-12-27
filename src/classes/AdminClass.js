const AdminModel = require("../models/AdminModel")
const bcrypt = require("bcrypt")

class Admin {

    static async create(admin) {
        admin.password = await bcrypt.hash(admin.password, 10)
        const t = await AdminModel.create(admin)
        return t
    }

    static async find() {

        const t = await AdminModel.find().exec()
        return t
    }

    static async findById(admin_id) {

        const t = await AdminModel.findById(admin_id).exec()
        return t
    }

    static async update(id, admin) {
        
        admin.password = await bcrypt.hash(admin.password, 10)
        const t = await AdminModel.updateOne({ _id: id }, { $set: admin }).exec();
        return t;
    }

    static async remove(admin) {
        const t = await AdminModel.deleteOne({ _id: admin }).exec()
        return t
    }

    static async findByUsername(username) {
        const t = await AdminModel.findOne({ username: username }).exec()
        return t
    }

}

module.exports = Admin