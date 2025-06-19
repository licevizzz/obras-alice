const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const obrasRoutes = require('./routes/obras');
const fiscalizacoesRoutes = require('./routes/fiscalizacoes');

const app = express();


connectDB();


app.use(cors());
app.use(express.json({ limit: '10mb' }));


app.use('/obras', obrasRoutes);
app.use('/fiscalizacoes', fiscalizacoesRoutes);

module.exports = app;
