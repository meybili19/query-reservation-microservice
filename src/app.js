const express = require('express');
const cors = require('cors'); 
const { graphqlHTTP } = require('express-graphql');
const reservationSchema = require('./schema/reservationSchema');
const reservationResolver = require('./resolvers/reservationResolver');

require('dotenv').config();

const app = express();

// ✅ Configuración de CORS para permitir cualquier origen
app.use(cors({
  origin: '*', // Permite peticiones desde cualquier origen
  methods: ['GET', 'POST'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Headers permitidos
  credentials: true // Permitir credenciales (cookies, tokens, etc.)
}));

// Middleware de GraphQL
app.use('/reservation', graphqlHTTP({
  schema: reservationSchema,
  rootValue: reservationResolver,
  graphiql: true, // Interfaz gráfica para probar las consultas
}));

const PORT = process.env.PORT || 4003;

app.listen(PORT, () => {
  console.log(`🚀 Query reservation running at http://localhost:${PORT}/reservation`);
});
