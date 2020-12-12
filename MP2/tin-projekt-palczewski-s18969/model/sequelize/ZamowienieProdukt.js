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
        defaultValue: 0,
        allowNull: true,
        validate: {
            len: {
                msg: "Pole powinno być liczbą"
            },
        }
    },
    Ilosc: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                msg: "Pole powinno być liczbą"
            },
        }
    },
    Zamowienie_IdZamowienie: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                msg: "Pole powinno być liczbą"
            },
        }
    },
    Produkt_IdProdukt: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                msg: "Pole powinno być liczbą"
            },
        }
    }

});

module.exports = ZamowienieProdukt;

