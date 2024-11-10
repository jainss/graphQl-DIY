const Sequelize = require('sequelize');

const sequelize = new Sequelize('graphqldb','root', null,{
  host:'localhost',
  dialect:'mysql',
  logging: false
});

sequelize.authenticate().then(()=>{
  console.log("DB is connected");
}).catch((error)=>{
  console.log(`there is some error called ${error}`);
});

module.exports = sequelize;