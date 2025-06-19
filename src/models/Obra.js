const mongoose = require('mongoose');

const ObraSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  responsavel: { type: String, required: true },
  dataInicio: { type: Date, required: true },
  dataFim: { type: Date },
  localizacao: {
    latitude: { type: Number },
    longitude: { type: Number },
  },
  descricao: { type: String },
  foto: { type: String }, 
}, {
  timestamps: true
});

module.exports = mongoose.model('Obra', ObraSchema);

