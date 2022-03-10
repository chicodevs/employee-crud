const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('error', () => {
  console.log('Unexpected error occurred')
  process.exit(-1);
});

pool.on('connect', () => {
  console.log('Base de Dados conectada com sucesso!')
});

module.exports = {
  query(text, params) => pool.query(text, params),
};

