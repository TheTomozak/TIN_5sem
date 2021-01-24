const ZamowieniaRepository = require('../repository/sequelize/ZamowieniaRepository');
const authUtil = require('../util/authUtils');

exports.login = (req, res, next) => {
    const Email = req.body.Email;
    const password = req.body.password;
    ZamowieniaRepository.findByEmail(Email)
        .then(zamowienie => {
            if(!zamowienie) {
                res.render('index', {
                    navLocation: '',
                    loginError: "Nieprawidłowy adres email lub hasło"
                })
            } else if(authUtil.comparePasswords(password, zamowienie.password) === true)  {
                req.session.loggedUser = zamowienie;
                res.redirect('/');
            } else {
                res.render('index', {
                    navLocation: '',
                    loginError: "Nieprawidłowy adres email lub hasło"
                })
            }
        })
        .catch(err => {
            console.log(err);
        });

}

exports.logout = (req, res, next) => {
    req.session.loggedUser = undefined;
    res.redirect('/');
}

