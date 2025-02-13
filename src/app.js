const express = require('express');
const cors = require('cors'); 
const { graphqlHTTP } = require('express-graphql');
const reservationSchema = require('./schema/reservationSchema');
const reservationResolver = require('./resolvers/reservationResolver');

require('dotenv').config();

const app = express();

app.use(cors({
  origin: "http://localhost:3000", 
  credentials: true
}));

app.use('/reservation', graphqlHTTP({
  schema: reservationSchema,
  rootValue: reservationResolver,
  graphiql: true, 
}));

const PORT = process.env.PORT || 4003;

app.listen(PORT, () => {
  console.log(`🚀 Query reservation running at http://localhost:${PORT}/reservation`);
});
