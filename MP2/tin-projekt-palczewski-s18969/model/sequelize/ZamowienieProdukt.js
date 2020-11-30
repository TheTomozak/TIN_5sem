const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const ZamowienieProdukt = sequelize.define('ZamowienieProdukt', {
    IdZamowienieProdukt: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Rabat: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    Ilosc: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Zamowienie_IdZamowienie: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Produkt_IdProdukt: {
        type: Sequelize.INTEGER,
        allowNull: false
    }

});

module.exports = ZamowienieProdukt;

