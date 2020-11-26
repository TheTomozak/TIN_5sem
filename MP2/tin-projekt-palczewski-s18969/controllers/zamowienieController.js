exports.showZamowieniaList = (req, res, next) => {
    res.render('../views/Pages/Zamówienia/ListaZamówień.ejs', {});
}

exports.showAddZamowieniaForm = (req, res, next) => {
    res.render('../views/Pages/Zamówienia/FormularzNowegoZamówienia.ejs', {});
}

exports.showZamowieniaDetails = (req, res, next) => {
    res.render('../views/Pages/Zamówienia/SzczegółyZamówień.ejs', {});
}