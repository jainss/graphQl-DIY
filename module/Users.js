module.exports = (sequelize, DataTypes)=>{
  const Users = sequelize.define('users', {
    name: DataTypes.STRING,
    email:DataTypes.STRING,
    gender:DataTypes.STRING,
    status:DataTypes.STRING,
  },{
    createdAt: 'create_at',
    updateAt: 'modified_at'
  })  
  return Users
}
