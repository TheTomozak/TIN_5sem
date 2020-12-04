const ProduktRepository = require('../repository/sequelize/ProduktRepository');


exports.showProduktiaList = (req, res, next) => {
  
    ProduktRepository.getProdukt()
    .then( produktLists => {
        res.render('Pages/Produkt/ListaProduktow', {
            produktLists: produktLists,
           navLocation: 'produktList' 
        });
    })
}


exports.showAddProduktForm = (req, res, next) => {
    res.render('Pages/Produkt/FormularzNowegoProduktu.ejs', {navLocation: 'Produkt'});
}

exports.showProduktDetails = (req, res, next) => {
    res.render('Pages/Produkt/SzczegółyProduktu.ejs', {navLocation: 'Produkt'});
}
