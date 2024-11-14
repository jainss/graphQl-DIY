const UserType = require("../TypeDefs/UserType");
const { GraphQLList, GraphQLInt } = require('graphql');;

module.exports.USER_LIST = {
  type: new GraphQLList(UserType),
  resolve: async (parent, args, context) =>{
    console.log(await context());
    const {dbconfig} = parent;
    return dbcongig.users.findAll();
  },
};

module.exports.USER_DETAIL = {
  type: new GraphQLList(UserType),
  args: {
    id: {type: GraphQLInt}
  },
  resolve: async (parent, args, context) =>{
    console.log(await context());
    const {dbconfig} = parent;
    return dbconfig.users.findAll({where: {id: args.id}});
  },
};