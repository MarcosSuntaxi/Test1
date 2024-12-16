const express = require('express');
const bodyParser = require('body-parser');
const playerRoutes = require('./routes/playerRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/api/players', playerRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
