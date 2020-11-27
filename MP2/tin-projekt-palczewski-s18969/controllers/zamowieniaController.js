exports.showZamowieniaList = (req, res, next) => {
    res.render('Pages/Zamówienia/ListaZamówień.ejs', {});
}


exports.showAddZamowieniaForm = (req, res, next) => {
    res.render('Pages/Zamówienia/FormularzNowegoZamówienia.ejs', {});
}

exports.showZamowieniaDetails  = (req, res, next) => {
    res.render('Pages/Zamówienia/SzczegółyZamówień.ejs', {});
}
