const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Zamowienie = sequelize.define('Zamowienie', {
    IdZamowienie: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    DataPrzyjecia: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    DataRealizacji: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    Kwota:{
        type: Sequelize.DECIMAL(10, 2),
       allowNull: false
    },
    Imie:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Nazwisko:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    NumerTelefonu:{
        type: Sequelize.INTEGER,
        allowNull: true
    }
});

module.exports = Zamowienie;

