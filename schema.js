const graphql = require("graphql");
const {
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLObjectType,
  GraphQLList,
} = graphql;

const UserType = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

const Rootquery = new GraphQLObjectType({
  name: "xyz",
  fields: {
    getUserData: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        const data = [
          {
            id: 1,
            name: "sahil",
            email: "sj2394108@gmail.com",
            phone: "7523918999",
          },
          {
            id: 1,
            name: "jain",
            email: "sj23941@gmail.com",
            phone: "7523918998",
          },
        ];
        return data;
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: Rootquery });
