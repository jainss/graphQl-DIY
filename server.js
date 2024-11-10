const express = require('express');
const app = express();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');

const PORT = 3000;

require('./modules/index');

app.use(express.json());

app.use('/graphql', 
    graphqlHTTP({
      schema,
      graphiql:true
   })
);

app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + PORT)
    else
        console.log("Error occurred, server can't start", error);
});