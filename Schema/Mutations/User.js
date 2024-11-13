const db = require('../../module');
const UserType = require('../TypeDefs/UserType');
const graphql = require('graphql')
const {GraphQLString, GraphQLInt} = graphql

module.exports.USER_ADD = {
    type: UserType,
    args: {
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        status: {type: GraphQLString}
    },
    resolve(parent, args){
        db.users.create({name: args.name, email:args.email, status: args.status });
        return args
    }
}
