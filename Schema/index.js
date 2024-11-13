const graphql= require('graphql');
const { GraphQLSchema, GraphQLObjectType } = graphql;
const {USER_LIST} = require('./Queries/User');
const { USER_ADD } = require('./Mutations/User');

// This is the Resolver...
const Resolvequery = new GraphQLObjectType({
  name: "xyz",
  fields: {
    getUserData: USER_LIST
  },
});


const Mutation = new GraphQLObjectType({
  name: 'mutation',
  fields:{
    createUser: USER_ADD
  }
})

module.exports = new GraphQLSchema({ query: Resolvequery, mutation: Mutation});
