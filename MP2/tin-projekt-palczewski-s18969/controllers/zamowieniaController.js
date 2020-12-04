exports.showZamowieniaList = (req, res, next) => {
    res.render('Pages/Zamówienia/ListaZamówień.ejs', {navLocation: 'zamowienie'});
}


exports.showAddZamowieniaForm = (req, res, next) => {
    res.render('Pages/Zamówienia/FormularzNowegoZamówienia.ejs', {navLocation: 'zamowienie'});
}

exports.showZamowieniaDetails = (req, res, next) => {
    res.render('Pages/Zamówienia/SzczegółyZamówień.ejs', {navLocation: 'zamowienie'});
}
