const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Produkt = sequelize.define('Produkt', {
    IdProdukt: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    Nazwa: {
        type: Sequelize.STRING,
        allowNull: false
    },
    TypProduktu: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Gwarancja: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Cena:{
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
    },
    Kolor:{
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = Produkt;



