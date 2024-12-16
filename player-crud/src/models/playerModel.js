const db = require('../config/db');

const Player = {
  getAll: (callback) => {
    db.query('SELECT * FROM players', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM players WHERE id = ?', [id], callback);
  },
  create: (player, callback) => {
    const { image, name, country, team } = player;
    db.query(
      'INSERT INTO players (image, name, country, team) VALUES (?, ?, ?, ?)',
      [image, name, country, team],
      callback
    );
  },
  update: (id, player, callback) => {
    const { image, name, country, team } = player;
    db.query(
      'UPDATE players SET image = ?, name = ?, country = ?, team = ? WHERE id = ?',
      [image, name, country, team, id],
      callback
    );
  },
  delete: (id, callback) => {
    db.query('DELETE FROM players WHERE id = ?', [id], callback);
  },
};

module.exports = Player;
