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
        formAction: '/zamowienia/add',
        navLocation: 'zamowienie',
        validationErrors: []
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
                formAction: '/zamowienia/edit',
                navLocation: 'zamowienie',
                validationErrors: []
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
                pageTitle: 'Szczegóły zamowienia',
                formAction: '',
                navLocation: 'zamowienie',
                validationErrors: []
            });
        });
}



exports.addZamowienia = (req, res, next) => {
    const zamowienieData = { ...req.body };
    ZamowieniaRepository.createZamowienie(zamowienieData)
        .then(result => {
            res.redirect('/zamowienia');
        })
        .catch(err => {
            res.render('Pages/Zamówienia/FormularzNowegoZamówienia', {
                zamowienie: zamowienieData,
                pageTitle: 'Nowe zamowienie',
                formMode: 'createNew',
                btnLabel: 'Dodaj',
                formAction: '/zamowienia/add',
                navLocation: 'zamowienie',
                validationErrors: err.errors
            });
        });




};

exports.updateZamowienia = (req, res, next) => {
    const idZamowienie = req.body.IdZamowienie;
    const zamowienieData = { ...req.body };
    ZamowieniaRepository.updateZamowienie(idZamowienie, zamowienieData)
        .then(result => {
            res.redirect('/zamowienia');
        })
        .catch(err => {
            res.render('Pages/Zamówienia/FormularzNowegoZamówienia', {
                zamowienie: zamowienieData,
                pageTitle: 'Nowe zamowienie',
                formMode: 'createNew',
                btnLabel: 'Dodaj',
                formAction: '/zamowienia/add',
                navLocation: 'zamowienie',
                validationErrors: err.errors
            });
        });
};

exports.deleteZamowienia = (req, res, next) => {
    const idZamowienie = req.params.idZamowienie;
    ZamowieniaRepository.deleteZamowienie(idZamowienie)
        .then(() => {
            res.redirect('/zamowienia');
        });
};



