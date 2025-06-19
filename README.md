# 🏗️ Backend do Sistema de Cadastro de Obras

Este é o backend para um aplicativo mobile de cadastro e acompanhamento de obras em andamento, desenvolvido com Node.js, MongoDB e Mongoose, seguindo uma arquitetura modular MVC. A API oferece funcionalidades de CRUD para obras e fiscalizações, upload de imagens em base64, listagem de fiscalizações por obra e envio de detalhes de obras por e-mail.

## 🚀 Tecnologias Utilizadas

- Node.js: Plataforma para execução do backend.
- Express: Framework para criação de APIs RESTful.
- MongoDB: Banco de dados NoSQL.
- Mongoose: ORM para interação com o MongoDB.
- Nodemailer: Envio de e-mails (suporta Gmail ou Ethereal para testes).
- dotenv: Gerenciamento de variáveis de ambiente.

## ✅ Pré-requisitos

- Node.js: Versão 16 ou superior.
- MongoDB: Instância local ou cluster no MongoDB Atlas.
- Conta de e-mail: Para Nodemailer (ex.: Gmail com senha de aplicativo ou Ethereal para testes).

## 🛠️ Instalação

```bash
git clone <URL_DO_REPOSITORIO>
cd obras-backend
npm install
```

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```
MONGO_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/obras?retryWrites=true&w=majority
EMAIL_USER=<seu_email@gmail.com ou user@ethereal.email>
EMAIL_PASS=<senha_de_app_ou_ethereal>
PORT=3000
```

Para MongoDB Atlas, substitua `<user>`, `<password>`, e `<cluster>` pelas credenciais do seu cluster.

### Inicie o servidor

```bash
npm start
```

O servidor estará disponível em `http://localhost:3000`.

## 📁 Estrutura do Projeto

```
├── src/
│   ├── config/
│   │   └── db.js              # Conexão com MongoDB
│   ├── controllers/
│   │   ├── obraController.js
│   │   └── fiscalizacaoController.js
│   ├── models/
│   │   ├── Obra.js
│   │   └── Fiscalizacao.js
│   ├── routes/
│   │   ├── obras.js
│   │   └── fiscalizacoes.js
│   └── app.js
├── .env
├── package.json
└── README.md
```

## 🌐 Rotas da API

### Obras

| Método | Endpoint | Descrição | Payload? |
|--------|----------|-----------|----------|
| GET    | /obras   | Lista todas as obras | Não |
| GET    | /obras/:id | Detalhes de uma obra | Não |
| POST   | /obras   | Cria uma nova obra | Sim |
| PUT    | /obras/:id | Atualiza uma obra | Sim |
| DELETE | /obras/:id | Deleta uma obra | Não |
| POST   | /obras/:id/email | Envia e-mail com detalhes da obra | Sim |
| GET    | /obras/:id/fiscalizacoes | Lista fiscalizações da obra | Não |

### Fiscalizações

| Método | Endpoint | Descrição | Payload? |
|--------|----------|-----------|----------|
| GET    | /fiscalizacoes | Lista todas as fiscalizações | Não |
| GET    | /fiscalizacoes/:id | Detalhes da fiscalização | Não |
| POST   | /fiscalizacoes | Cria uma fiscalização | Sim |
| PUT    | /fiscalizacoes/:id | Atualiza uma fiscalização | Sim |
| DELETE | /fiscalizacoes/:id | Deleta uma fiscalização | Não |

## 📦 Exemplos de Payload

### POST /obras

```json
{
  "nome": "Construção da Ponte",
  "responsavel": "João Silva",
  "dataInicio": "2025-06-01T00:00:00Z",
  "dataFim": "2025-12-01T00:00:00Z",
  "localizacao": { "lat": -23.5505, "long": -46.6333 },
  "descricao": "Construção de uma ponte de concreto",
  "foto": "data:image/jpeg;base64,/9j/4AAQSk..."
}
```

### POST /obras/:id/email

```json
{
  "email": "destinatario@exemplo.com"
}
```

### POST /fiscalizacoes

```json
{
  "data": "2025-06-16T00:00:00Z",
  "status": "Em andamento",
  "observacoes": "Obra progredindo bem",
  "localizacao": { "lat": -23.5505, "long": -46.6333 },
  "foto": "data:image/jpeg;base64,/9j/4AAQSk...",
  "obra": "685084b646aa67dd8aeec563"
}
```

## ✅ Testes e Validações

- Use Thunder Client ou Postman para testar os endpoints.
- Configure corretamente seu e-mail no `.env`.
- Para testar envio com Ethereal, crie conta em [ethereal.email](https://ethereal.email/create).

## ⚠️ Solução de Problemas

- **Erro 404**: Verifique se o `_id` está correto.
- **Erro 500 (e-mail)**: Verifique `EMAIL_USER` e `EMAIL_PASS`.
- **MongoDB não conecta**: Verifique `MONGO_URI` no `.env`.

---
