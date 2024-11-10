const graphql= require('graphql');
const { GraphQLSchema, GraphQLObjectType } = graphql;
const {USER_LIST} = require('./Queries/User')

// This is the Resolver...
const Resolvequery = new GraphQLObjectType({
  name: "xyz",
  fields: {
    getUserData: USER_LIST
  },
});

module.exports = new GraphQLSchema({ query: Resolvequery });
