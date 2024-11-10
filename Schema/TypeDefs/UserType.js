const graphql = require("graphql");
const {
    GraphQLInt,
    GraphQLString,
    GraphQLObjectType,
} = graphql;

// This is TypeDefs...
const UserType = new GraphQLObjectType({
    name: "user",
    fields: () => ({
      id: { type: GraphQLInt },
      name: { type: GraphQLString },
      email: { type: GraphQLString },
      status: { type: GraphQLString },
    }),
  });

module.exports = UserType;