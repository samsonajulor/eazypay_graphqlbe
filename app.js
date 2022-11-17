const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');

const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');
const isAuth = require('./middleware/is-auth');

const app = express();

app.use(bodyParser.json());

app.use(isAuth);

app.use(
  '/graphql',
  graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
  })
);
mongoose
  .connect(`mongodb+srv://eazypay:w5VfTmuqoe06RMA2@eazypay-be.uhktzcp.mongodb.net/?retryWrites=true&w=majority`) // hide this in production
  .then(() => {
    app.listen(3000);
    console.log('Server is running on port 3000...');
  })
  .catch((err) => {
    console.log(err);
  });
