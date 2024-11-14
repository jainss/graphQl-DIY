const { UserType, StatusType } = require('../TypeDefs/UserType');
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
        await dbconfig.users.create({name: args.name, email:args.email, status: args.status });
        return args
    }
}

module.exports.USER_UPDATE = {
    type: StatusType,
    args: {
        id: {type: GraphQLInt},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        status: {type: GraphQLString}
    },
    resolve: async(parent, args, context)=>{
        console.log(await context())
        const {dbconfig} = parent
        await dbconfig.users.destroy({where:{id: args.id}});
        return {
            success: "true",
            message: "User Deleted Successfully !!!",
            error : ""
        }
    }
}

module.exports.USER_DELETE = {
    type: StatusType,
    args: {
        id: {type: GraphQLInt}
    },
    resolve: async(parent, args, context)=>{
        console.log(await context())
        const {dbconfig} = parent
        await dbconfig.users.update({name: args.name, email:args.email, status: args.status }, {where:{id: args.id}});
        return {
            success: "true",
            message: "Updated Successfully !!!",
            error : "no"
        }
    }
}
