const {model, Schema} = require('mongoose')
const WilayaSchema = new Schema({

  code: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  created_at:{
    type: Date,
    default: Date.now
  },
  updated_at:{
    type: Date,
    default: Date.now
  }

});

module.exports = WilayaModel = model('Wilaya', WilayaSchema,'wilayas');
