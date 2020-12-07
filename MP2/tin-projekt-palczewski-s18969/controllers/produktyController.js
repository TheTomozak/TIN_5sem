const ProduktRepository = require('../repository/sequelize/ProduktRepository');


exports.showProduktiaList = (req, res, next) => {

    ProduktRepository.getProdukt()
        .then(produktList => {
            res.render('Pages/Produkt/ListaProduktow', {
                produktList: produktList,
                navLocation: 'produkt'
            });
        })
}


exports.showAddProduktForm = (req, res, next) => {
    res.render('Pages/Produkt/FormularzNowegoProduktu', {
        produkt: {},
        pageTitle: 'Nowy produkt',
        formMode: 'createNew',
        btnLabel: 'Dodaj',
        formAction: '/Produkt/add',
        navLocation: 'produkt'
    });
}

exports.showEditProduktForm = (req, res, next) => {
    const idProduktu = req.params.idProduktu;
    ProduktRepository.getProduktById(idProduktu)
        .then(produkt => {
            res.render('Pages/Produkt/FormularzNowegoProduktu', {
                produkt: produkt,
                formMode: 'edit',
                pageTitle: 'Edycja produktu',
                btnLabel: 'Edytuj',
                formAction: '/Produkt/edit',
                navLocation: 'produkt'
            });
        });
};

exports.showProduktDetails = (req, res, next) => {
    const idProduktu = req.params.idProduktu;
    ProduktRepository.getProduktById(idProduktu)
        .then(produkt => {
            res.render('Pages/Produkt/FormularzNowegoProduktu', {
                produkt: produkt,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły produktu',
                formAction: '',
                navLocation: 'produkt'
            });
        });
}


