const graphql= require('graphql');
const { GraphQLSchema, GraphQLObjectType } = graphql;
const {USER_LIST, USER_DETAIL} = require('./Queries/User');
const { USER_ADD, USER_UPDATE, USER_DELETE } = require('./Mutations/User');

// This is the Resolver...
const Resolvequery = new GraphQLObjectType({
  name: "xyz",
  fields: {
    getUserData: USER_LIST,
    getUserDetail: USER_DETAIL
  },
});

const Mutation = new GraphQLObjectType({
  name: 'mutation',
  fields:{
    createUser: USER_ADD,
    // userUpdate: USER_UPDATE,
    // deleteUser: USER_DELETE
  }
})

module.exports = new GraphQLSchema({ query: Resolvequery, mutation: Mutation});
