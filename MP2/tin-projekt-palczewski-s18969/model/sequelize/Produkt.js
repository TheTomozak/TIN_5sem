const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

var sequelizeTransforms = require('sequelize-transforms');
sequelizeTransforms(sequelize);

const Produkt = sequelize.define('Produkt', {
    IdProdukt: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    Nazwa: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        trim: true,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args: [2, 60],
                msg: "Pole powinno zawierać od 2 do 60 znaków"
            }
        }
    },
    TypProduktu: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args: [2, 40],
                msg: "Pole powinno zawierać od 2 do 40 znaków"
            },
        }
    },
    Gwarancja: {
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
    Cena: {
        type: Sequelize.DECIMAL(10, 2),
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
    Kolor: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = Produkt;



