const ZamowieniaRepository = require('../repository/sequelize/ZamowieniaRepository');


exports.showZamowieniaList = (req, res, next) => {

    ZamowieniaRepository.getZamowienia()
        .then(zamowienieList => {
            res.render('Pages/Zamówienia/ListaZamówień', {
                zamowienieList: zamowienieList,
                navLocation: 'zamowienie'
            });
        })
}


exports.showZamowieniaForm = (req, res, next) => {
    res.render('Pages/Zamówienia/FormularzNowegoZamówienia', {
        zamowienie: {},
        pageTitle: 'Nowe zamowienie',
        formMode: 'createNew',
        btnLabel: 'Dodaj',
        formAction: '/zamowienie/add',
        navLocation: 'zamowienie'
    });
}

exports.showEditZamowieniaForm = (req, res, next) => {
    const idZamowienie = req.params.idZamowienie;
    ZamowieniaRepository.getZamowienieById(idZamowienie)
        .then(zamowienie => {
            res.render('Pages/Zamówienia/FormularzNowegoZamówienia', {
                zamowienie: zamowienie,
                formMode: 'edit',
                pageTitle: 'Edycja zamowienia',
                btnLabel: 'Edytuj',
                formAction: '/zamowienie/edit',
                navLocation: 'zamowienie'
            });
        });
};

exports.showZamowieniaDetails = (req, res, next) => {
    const idZamowienie = req.params.idZamowienie;
    ZamowieniaRepository.getZamowienieById(idZamowienie)
        .then(zamowienie => {
            res.render('Pages/Zamówienia/FormularzNowegoZamówienia', {
                zamowienie: zamowienie,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły produktu',
                formAction: '',
                navLocation: 'zamowienie'
            });
        });
}



