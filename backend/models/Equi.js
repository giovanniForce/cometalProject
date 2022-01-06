const mongoose = require('mongoose');

const equiSchema = mongoose.Schema({
  name_equi: { type: String, required: true },
  etat: { type: String, required: true },
  codeEqui: { type: Number, required: true },
  quantite: { type: String, required: true },
});

module.exports = mongoose.model('equi', equiSchema);