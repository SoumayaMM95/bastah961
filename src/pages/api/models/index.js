const dbConfig = require('../config/db-config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbConfig.DATABASE, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    operatorsAliases: 0,
    dialect: dbConfig.DIALECT,
});

const db = {};
db.sequelize = sequelize;

db.models = {};
db.models.Category = require('./category')(sequelize, Sequelize.DataTypes);
db.models.Product = require('./product')(sequelize, Sequelize.DataTypes);


db.models.Category.hasMany(db.models.Product, {foreignKey: 'CategoryID', as: "Products" });
db.models.Product.belongsTo(db.models.Category, {
  foreignKey: 'CategoryID',
  as: "Products",
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
  
});

module.exports = db;