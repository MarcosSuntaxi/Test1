const Player = require('../models/playerModel');

const playerController = {
  getAllPlayers: (req, res) => {
    Player.getAll((err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    });
  },
  getPlayerById: (req, res) => {
    const { id } = req.params;
    Player.getById(id, (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else if (results.length === 0) {
        res.status(404).send('Player not found');
      } else {
        res.json(results[0]);
      }
    });
  },
  createPlayer: (req, res) => {
    const player = req.body;
    Player.create(player, (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send('Player created');
      }
    });
  },
  updatePlayer: (req, res) => {
    const { id } = req.params;
    const player = req.body;
    Player.update(id, player, (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send('Player updated');
      }
    });
  },
  deletePlayer: (req, res) => {
    const { id } = req.params;
    Player.delete(id, (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send('Player deleted');
      }
    });
  },
};

module.exports = playerController;
