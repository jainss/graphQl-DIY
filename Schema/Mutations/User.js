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
    resolve: async(parent, args, context)=>{
        console.log(await context())
        const {dbconfig} = parent
        dbconfig.users.create({name: args.name, email:args.email, status: args.status });
        return args
    }
}
