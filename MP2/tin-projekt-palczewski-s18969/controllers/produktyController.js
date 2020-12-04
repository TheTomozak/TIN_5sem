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
    res.render('Pages/Produkt/FormularzNowegoProduktu',{
        produktLists: {},
        pageTitle: 'Nowy produkt',
        formMode: 'createNew',
        btnLabel: 'Dodaj produkt',
        formAction: '/Produkt/add',
        navLocation: 'produktLists'
    });
}

exports.showEditProduktForm = (req, res, next) => {
    const idProduktu = req.params.idProduktu;
    ProduktRepository.getProduktById(idProduktu)
        .then(produktList => {
            res.render('Pages/Produkt/FormularzNowegoProduktu', {
                emp: produktList,
                formMode: 'edit',
                pageTitle: 'Edycja produktu',
                btnLabel: 'Edytuj produkt',
                formAction: '/Produkt/edit',
                navLocation: 'produktList'
            });
        });
};

exports.showProduktDetails = (req, res, next) => {
    const idProduktu = req.params.idProduktu;
    ProduktRepository.getProduktById(idProduktu)
        .then(produktList => {
            res.render('Pages/Produkt/SzczegółyProduktu', {
                produktList: produktList,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły produktu',
                formAction: '',
                navLocation: 'produktList'
            });
        });
}


