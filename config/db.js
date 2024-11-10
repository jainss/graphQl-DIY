const { Sequelize } = require('sequelize');

// Create a new instance of Sequelize for SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',               // Use SQLite as the database dialect
  storage: './database.sqlite',    // Path to the SQLite database file
});

// Test the database connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Export the Sequelize instance for use in other parts of the app
module.exports = sequelize;
