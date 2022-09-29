const { Sequelize, DataTypes } = require("sequelize");
const CONFIG = require("../config/dbConfig");


const sequelize = new Sequelize(
  CONFIG.database,
  CONFIG.username,
  CONFIG.password,
  {
    host: CONFIG.host,
    dialect: CONFIG.dialect
  }
);

sequelize.authenticate().then(() => {
    console.log("Mysql connected!")
}).catch(error => {
    console.log("An error occured: ", error);
})


const db = {}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.books = require('./book')(sequelize, DataTypes);
db.authors = require('./author')(sequelize, DataTypes);

db.authors.hasMany(db.books);
db.books.belongsTo(db.authors);


db.sequelize.sync({force: false})
    .then(() => {
        console.log("Databases and tables synced")
    }).catch((err) => {
        console.log(err);
    })

module.exports = db;