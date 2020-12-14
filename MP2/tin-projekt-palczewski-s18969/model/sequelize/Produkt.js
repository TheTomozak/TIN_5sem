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
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args: [2, 60],
                msg: "Pole powinno zawierać od 2 do 60 znaków"
            },
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
        allowNull: true,
        validate: {
            len: {
                args: [2, 60],
                msg: "Pole jest opcjonalne - jeśli chcesz wpisać kolor powinnien zawierać się od 2 do 60 znaków"
            },

        }
    }
});

module.exports = Produkt;



