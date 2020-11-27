exports.showProduktiaList = (req, res, next) => {
    res.render('Pages/Produkt/ListaProduktow.ejs', {navLocation: 'Produkt'});
}


exports.showAddProduktForm = (req, res, next) => {
    res.render('Pages/Produkt/FormularzNowegoProduktu.ejs', {navLocation: 'Produkt'});
}

exports.showProduktDetails = (req, res, next) => {
    res.render('Pages/Produkt/SzczegółyProduktu.ejs', {navLocation: 'Produkt'});
}
