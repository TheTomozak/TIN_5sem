exports.showZamowieniaList = (req, res, next) => {
    res.render('Pages/Zamówienia/ListaZamówień.ejs', {navLocation: 'Zamowienie'});
}


exports.showAddZamowieniaForm = (req, res, next) => {
    res.render('Pages/Zamówienia/FormularzNowegoZamówienia.ejs', {navLocation: 'Zamowienie'});
}

exports.showZamowieniaDetails = (req, res, next) => {
    res.render('Pages/Zamówienia/SzczegółyZamówień.ejs', {navLocation: 'Zamowienie'});
}
