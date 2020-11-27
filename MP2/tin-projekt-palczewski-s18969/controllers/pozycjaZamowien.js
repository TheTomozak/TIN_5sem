exports.showPozycjaZamowienList = (req, res, next) => {
    res.render('Pages/PozycjaZamówień/ListaPozycjiZamówień.ejs', {});
}


exports.showAddPozycjaZamowienForm = (req, res, next) => {
    res.render('Pages/PozycjaZamówień/FormularzNowejPozycjiZamówień.ejs', {});
}

exports.showPozycjaZamowienDetails  = (req, res, next) => {
    res.render('Pages/PozycjaZamówień/SzczegółyPozycjiZamówień.ejs', {});
}
