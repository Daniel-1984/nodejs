// database.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('form_data.db');

// Criação da tabela "formData"
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS formData (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT,
      message TEXT
    )
  `);
});

module.exports = db;
