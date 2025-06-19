const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

async function enviarEmail(para, assunto, mensagem) {
  await transporter.sendMail({
    from: `"Sistema de Obras" <${process.env.EMAIL_USER}>`,
    to: para,
    subject: assunto,
    html: mensagem
  });
}

module.exports = enviarEmail;
