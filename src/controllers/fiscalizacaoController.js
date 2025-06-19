const Fiscalizacao = require('../models/Fiscalizacao');

exports.criarFiscalizacao = async (req, res) => {
  try {
    const novaFiscalizacao = await Fiscalizacao.create(req.body);
    res.status(201).json(novaFiscalizacao);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

exports.listarFiscalizacoes = async (req, res) => {
  try {
    const fiscalizacoes = await Fiscalizacao.find().populate('obra');
    res.json(fiscalizacoes);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

exports.obterFiscalizacaoPorId = async (req, res) => {
  try {
    const fiscalizacao = await Fiscalizacao.findById(req.params.id).populate('obra');
    if (!fiscalizacao) return res.status(404).json({ erro: 'Fiscalização não encontrada' });
    res.json(fiscalizacao);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

exports.atualizarFiscalizacao = async (req, res) => {
  try {
    const fiscalizacaoAtualizada = await Fiscalizacao.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!fiscalizacaoAtualizada) return res.status(404).json({ erro: 'Fiscalização não encontrada' });
    res.json(fiscalizacaoAtualizada);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

exports.deletarFiscalizacao = async (req, res) => {
  try {
    const fiscalizacao = await Fiscalizacao.findByIdAndDelete(req.params.id);
    if (!fiscalizacao) return res.status(404).json({ erro: 'Fiscalização não encontrada' });
    res.json({ mensagem: 'Fiscalização excluída com sucesso' });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};
