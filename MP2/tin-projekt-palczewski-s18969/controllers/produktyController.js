exports.showProduktiaList = (req, res, next) => {
    res.render('Pages/Produkt/ListaProduktow.ejs', {});
}


exports.showAddProduktForm = (req, res, next) => {
    res.render('Pages/Produkt/FormularzNowegoProduktu.ejs', {});
}

exports.showProduktDetails  = (req, res, next) => {
    res.render('Pages/Produkt/SzczegółyProduktu.ejs', {});
}
