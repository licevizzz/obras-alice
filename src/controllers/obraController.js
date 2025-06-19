const Obra = require('../models/Obra');
const Fiscalizacao = require('../models/Fiscalizacao');

exports.criarObra = async (req, res) => {
  try {
    const novaObra = await Obra.create(req.body);
    res.status(201).json(novaObra);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

exports.listarObras = async (req, res) => {
  try {
    const obras = await Obra.find();
    res.json(obras);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

exports.obterObraPorId = async (req, res) => {
  try {
    const obra = await Obra.findById(req.params.id);
    if (!obra) return res.status(404).json({ erro: 'Obra não encontrada' });
    res.json(obra);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

exports.atualizarObra = async (req, res) => {
  try {
    const obraAtualizada = await Obra.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!obraAtualizada) return res.status(404).json({ erro: 'Obra não encontrada' });
    res.json(obraAtualizada);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

exports.deletarObra = async (req, res) => {
  try {
    const obra = await Obra.findByIdAndDelete(req.params.id);
    if (!obra) return res.status(404).json({ erro: 'Obra não encontrada' });
    res.json({ mensagem: 'Obra excluída com sucesso' });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

exports.listarFiscalizacoesPorObra = async (req, res) => {
  try {
    const fiscalizacoes = await Fiscalizacao.find({ obra: req.params.id });
    res.json(fiscalizacoes);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};
