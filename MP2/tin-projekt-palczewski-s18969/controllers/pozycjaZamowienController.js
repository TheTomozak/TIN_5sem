const PozycjaZamowienRepository = require('../repository/sequelize/ZamowienieProduktyRepository');



exports.showPozycjaZamowieniaList = (req, res, next) => {

    PozycjaZamowienRepository.getZamowienieProdukt()
        .then(pozycjaZamowienList => {
            res.render('Pages/PozycjaZamówień/ListaPozycjiZamówień', {
                pozycjaZamowienList: pozycjaZamowienList,
                navLocation: 'pozycjaZamowien'
            });
        })
}

exports.showPozycjaZamowieniaForm = (req, res, next) => {
    res.render('Pages/PozycjaZamówień/FormularzNowejPozycjiZamówień', {
        pozycjaZamowien: {},
        pageTitle: 'Nowa pozycja zamówień',
        formMode: 'createNew',
        btnLabel: 'Dodaj',
        formAction: '/pozycjaZamowien/add',
        navLocation: 'pozycjaZamowien'
    });
}

exports.showEditPozycjaZamowieniaForm = (req, res, next) => {
    const idPozycjaZamowien = req.params.idPozycjaZamowien;
    PozycjaZamowienRepository.getZamowienieProduktById(idPozycjaZamowien)
        .then(pozycjaZamowien => {
            res.render('Pages/PozycjaZamówień/FormularzNowejPozycjiZamówień', {
                pozycjaZamowien: pozycjaZamowien,
                formMode: 'edit',
                pageTitle: 'Edycja pozycji zamówień',
                btnLabel: 'Edytuj',
                formAction: '/pozycjaZamowien/edit',
                navLocation: 'pozycjaZamowien'
            });
        });
};

exports.showPozycjaZamowieniaDetails = (req, res, next) => {
    const idPozycjaZamowien = req.params.idPozycjaZamowien;
    PozycjaZamowienRepository.getZamowienieProduktById(idPozycjaZamowien)
        .then(pozycjaZamowien => {
            res.render('Pages/PozycjaZamówień/FormularzNowejPozycjiZamówień', {
                pozycjaZamowien: pozycjaZamowien,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły pozycji zamówień',
                formAction: '',
                navLocation: 'pozycjaZamowien'
            });
        });
}



