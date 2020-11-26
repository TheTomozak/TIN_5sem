exports.showZamowieniaList = (req, res, next) => {
    res.render('/tin-projekt-palczewski-s18969/views/Pages/Zamówienia/ListaZamówień.ejs', {});
}

exports.showAddZamowieniaForm = (req, res, next) => {
    res.render('/tin-projekt-palczewski-s18969/views/Pages/Zamówienia/FormularzNowegoZamówienia.ejs', {});
}

exports.showZamowieniaDetails  = (req, res, next) => {
    res.render('/tin-projekt-palczewski-s18969/views/Pages/Zamówienia/SzczegółyZamówień.ejs', {});
}