const UserType = require("../TypeDefs/UserType");
const { GraphQLList } = require('graphql');;

module.exports.USER_LIST = {
  type: new GraphQLList(UserType),
  resolve: async (parent, args, context) =>{
    console.log(await context());
    const {dbconfig} = parent;
    return dbcongig.users.findAll();
  },
};