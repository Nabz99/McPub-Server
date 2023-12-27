const {model, Schema} = require('mongoose')
const PubSchema = new Schema({

  client: {
    type:  Schema.Types.ObjectId,
    ref: 'Client'
  },
  titre:{
    type: String,
    required: true
  },
  dimension: {
    type: {
      hauteur: {
        type: Number,
        required: false
      },
      largeur: {
        type: Number,
        required: false
      }
    }
  },
  description: {
    type: String,
    required: true
  },
  devis: {
    type: Number,
    required: false
  },
  etat: {
    type: String,
    required: false
  },
  retour: {
    type: String,
    required: false
  },
  versement: {
    type: Number,
    required: false
  },
  paye: {
    type: String,
    required: false
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

module.exports = PubModel = model('Pub', PubSchema, 'pubs');