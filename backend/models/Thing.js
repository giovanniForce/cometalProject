const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
  name: { type: String, required: true },
  nameEqui: { type: String, required: true },
  userId: { type: Number, required: false },
  codeEqui: { type: Number, required: true },
  probleme: { type: String, required: true },
  departement: { type: String, required: true },
});

module.exports = mongoose.model('Thing', thingSchema);