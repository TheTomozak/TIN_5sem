const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

var sequelizeTransforms = require('sequelize-transforms');
sequelizeTransforms(sequelize);

const Zamowienie = sequelize.define('Zamowienie', {
    IdZamowienie: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    DataPrzyjecia: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            isDate: {
                msg: "Pole powinno być datą"
            }
        }
    },
    DataRealizacji: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            isDate: {
                msg: "Pole powinno być datą"
            }
        }
    },
    Kwota: {
        type: Sequelize.DECIMAL(10, 2),
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
    Imie: {
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
    Nazwisko: {
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
    Email: {
        type: Sequelize.STRING,
        allowNull: false,
        lowercase: true,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args: [5, 60],
                msg: "Pole powinno zawierać od 5 do 60 znaków"
            },
            isEmail: {
                msg: 'Pole powinno zawierać prawidłowy adres email'
            }
        }
    },
    NumerTelefonu: {
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                msg: "Pole powinno być numerem telefonu"
            }

        }
    },
    password: {
        type: Sequelize.STRING,
         allowNull: false,
         validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args: [6, 60 ],
                msg: "Pole powinno zawierać od 2 do 60 znaków"
            },
        }
     }
     
    
});

module.exports = Zamowienie;

