const {model, Schema} = require('mongoose')

const ArticleSchema = new Schema({

  reference: {
    type: String,
    required: true,
    unique: true
  },
  designation: {
    type: String,
    required: true,
  },
  quantite: {
    type: Number,
    required: true,
  },
  prixunitaire: {
    type: Number,
    required: true,
  },
  prixdachat: {
    type: Number,
    required: true,
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

module.exports = model('Article', ArticleSchema,'articles');