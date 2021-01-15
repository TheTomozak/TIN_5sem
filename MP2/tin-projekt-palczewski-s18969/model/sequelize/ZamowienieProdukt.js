const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

var sequelizeTransforms = require('sequelize-transforms');
sequelizeTransforms(sequelize);

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
            min: {
                args: 0,
                msg: "Rabat musi być liczbą DODATNIĄ"
            }
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
            min: {
                args: 1,
                msg: "Koszt przesyłki musi być liczbą DODATNIĄ (zerem też nie może być)"
            }
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

