exports.showPozycjaZamowienList = (req, res, next) => {
    res.render('Pages/PozycjaZamówień/ListaPozycjiZamówień.ejs', {navLocation: 'PozycjaZamowien'});
}


exports.showAddPozycjaZamowienForm = (req, res, next) => {
    res.render('Pages/PozycjaZamówień/FormularzNowejPozycjiZamówień.ejs', {navLocation: 'PozycjaZamowien'});
}

exports.showPozycjaZamowienDetails = (req, res, next) => {
    res.render('Pages/PozycjaZamówień/SzczegółyPozycjiZamówień.ejs', {navLocation: 'PozycjaZamowien'});
}
