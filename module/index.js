const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require("../config/db");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.sequelize.sync({force: false }).then(()=>{
    console.log(`The DB is sync`);
})

console.log("we are hsssssssetre ");
db.users = require('./Users')(sequelize, DataTypes)

module.exports = db;
