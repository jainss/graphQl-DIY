const graphql = require("graphql");
const {
    GraphQLString,
    GraphQLObjectType,
    GraphQLBoolean
} = graphql;

// This is TypeDefs...
const StatusType = new GraphQLObjectType({
    name: "status",
    fields: () => ({
      success: { type: GraphQLBoolean},
      message: { type: GraphQLString},
      error: { type: GraphQLString}
    }),
  });

module.exports = StatusType;