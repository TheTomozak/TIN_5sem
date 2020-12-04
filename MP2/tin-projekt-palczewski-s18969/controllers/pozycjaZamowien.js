exports.showPozycjaZamowienList = (req, res, next) => {
    res.render('Pages/PozycjaZamówień/ListaPozycjiZamówień.ejs', {navLocation: 'pozycjaZamowien'});
}


exports.showAddPozycjaZamowienForm = (req, res, next) => {
    res.render('Pages/PozycjaZamówień/FormularzNowejPozycjiZamówień.ejs', {navLocation: 'pozycjaZamowien'});
}

exports.showPozycjaZamowienDetails = (req, res, next) => {
    res.render('Pages/PozycjaZamówień/SzczegółyPozycjiZamówień.ejs', {navLocation: 'pozycjaZamowien'});
}
