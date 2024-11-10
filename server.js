const express = require('express');
const app = express();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./Schema/index');

const PORT = 3308;

require('./module/index');

app.use(express.json());

app.use('/graphql', 
    graphqlHTTP({
      schema,
      graphiql:true
   })
);

app.listen(PORT, (e) => {
    if (!e)
        console.log("Server is Successfully Running, and App is listening on port " + PORT)
    else
        console.log("Error occurred, server can't start", e);
});