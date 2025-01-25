const { ApolloServer } = require('apollo-server');
const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');
const resolvers = require('./resolvers/reservationResolver');

const prisma = new PrismaClient();

const typeDefs = fs.readFileSync(path.join(__dirname, 'schema/reservationSchema.graphql'), 'utf-8');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return { prisma };
  },
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
