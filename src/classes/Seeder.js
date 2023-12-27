const WilayaModel = require("../models/WilayaModel");


const { wilaya } = require("../../mock/buncha");


class seeder {
  async wilaya() {
    //rechercher une wilaya dans la bdd
    const wl_exist = await WilayaModel.findOne();
    if (!wl_exist) {
      const wilayaDocuments = wilaya.map((w, index) => ({
        name: w,
        code: index + 1,
      }));
      await WilayaModel.insertMany(wilayaDocuments);
    }
  }
}

module.exports = seeder;
