const db = require('../config/db');

// Funciones para interactuar con la base de datos
const PlayerModel = {
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM players');
    return rows;
  },
  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM players WHERE id = ?', [id]);
    return rows[0];
  },
  create: async (player) => {
    const { image, name, country, team } = player;
    const [result] = await db.query('INSERT INTO players (image, name, country, team) VALUES (?, ?, ?, ?)', [image, name, country, team]);
    return result.insertId;
  },
  update: async (id, player) => {
    const { image, name, country, team } = player;
    await db.query('UPDATE players SET image = ?, name = ?, country = ?, team = ? WHERE id = ?', [image, name, country, team, id]);
  },
  delete: async (id) => {
    await db.query('DELETE FROM players WHERE id = ?', [id]);
  },
};

module.exports = PlayerModel;
