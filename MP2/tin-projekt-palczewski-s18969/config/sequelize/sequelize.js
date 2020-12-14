const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('TomoTechShop', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost',
  define: {
    freezeTableName: true,
    timestamps: false
  }
});

module.exports = sequelize;