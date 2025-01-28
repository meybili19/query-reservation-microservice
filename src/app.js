const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const reservationSchema = require('./schema/reservationSchema');
const reservationResolver = require('./resolvers/reservationResolver');

require('dotenv').config();

const app = express();

app.use('/reservation', graphqlHTTP({
  schema: reservationSchema,
  rootValue: reservationResolver,
  graphiql: true, // Interfaz para pruebas
}));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`GraphQL server running at http://localhost:${PORT}/reservation`);
});
