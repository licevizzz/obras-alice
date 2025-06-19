const express = require('express');
const router = express.Router();
const obraController = require('../controllers/obraController');
const enviarEmail = require('../config/emailService');
const Obra = require('../models/Obra'); 


router.post('/', obraController.criarObra);
router.get('/', obraController.listarObras);
router.get('/:id', obraController.obterObraPorId);
router.put('/:id', obraController.atualizarObra);
router.delete('/:id', obraController.deletarObra);
router.get('/:id/fiscalizacoes', obraController.listarFiscalizacoesPorObra);


router.post('/:id/enviar-email', async (req, res) => {
  const { id } = req.params;
  const { para } = req.body;

  try {
    const obra = await Obra.findById(id);
    if (!obra) return res.status(404).json({ error: 'Obra não encontrada.' });

    const mensagem = `
      <h2>Detalhes da Obra</h2>
      <p><strong>Nome:</strong> ${obra.nome}</p>
      <p><strong>Descrição:</strong> ${obra.descricao}</p>
      <p><strong>Localização:</strong> ${obra.localizacao}</p>
    `;

    await enviarEmail(para, "Detalhes da Obra", mensagem);
    res.status(200).json({ mensagem: "Email enviado com sucesso." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao enviar e-mail." });
  }
});

module.exports = router;
