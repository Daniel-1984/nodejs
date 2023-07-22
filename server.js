//---------
//const express = require('express');
//const app = express();
//const cors = require('cors');
//const PORT = 5000; // Porta que o servidor irá escutar

//app.use(cors());
//app.use(express.json());

//app.post('/api/submit', (req, res) => {
 // const formData = req.body;
  // Aqui, você pode fazer algo com os dados enviados pelo formulário, como salvá-los em um banco de dados ou processá-los de alguma forma.
  //console.log(formData);
 // res.json({ message: 'Formulário recebido com sucesso!' });
//});

//app.listen(PORT, () => {
 // console.log(`Servidor rodando na porta ${PORT}`);
//});
//---------------------------------------------------------------------------------------------------------
// server.js
const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./database'); // Importa o arquivo database.js

const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/submit', (req, res) => {
  const formData = req.body;

  // Insere os dados do formulário na tabela "formData"
  const query = `
    INSERT INTO formData (name, email, message)
    VALUES (?, ?, ?)
  `;
  const values = [formData.name, formData.email, formData.message];

  db.run(query, values, function (err) {
    if (err) {
      console.error('Erro ao salvar os dados no banco de dados:', err.message);
      res.status(500).json({ error: 'Erro ao salvar os dados no banco de dados' });
    } else {
      console.log('Dados do formulário salvos com sucesso!');
      res.json({ message: 'Formulário recebido e salvos com sucesso!' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

