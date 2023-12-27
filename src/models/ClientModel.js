const {model, Schema} = require('mongoose')

const ClientSchema = new Schema({

  nom: {
    type: String,
    required: true,
    min: 2,
    max: 20
  },
  prenom: {
    type: String,
    required: true,
    min: 2,
    max: 20
  },
  entreprise: {
    type: String,
    required: false,
    min: 2,
    max: 20
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    min: 6
  },
  tel: {
    type: String,
    required: true,
    unique: true
    },
  solde:{
    type: Number,
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

module.exports = model('Client', ClientSchema,'clients');