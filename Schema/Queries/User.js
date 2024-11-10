const db = require("../../module");
const UserType = require("../TypeDefs/UserType");
const { GraphQLList } = require('graphql');;

module.exports.USER_LIST = {
  type: new GraphQLList(UserType),
  resolve(parent, args) {
    return db.users.findAll();
  },
};