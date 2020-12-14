const PozycjaZamowienRepository = require('../repository/sequelize/ZamowienieProduktyRepository');
const ZamowieniaRepository = require('../repository/sequelize/ZamowieniaRepository');
const ProduktRepository = require('../repository/sequelize/ProduktRepository');



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
    let zamowienieGetAll = ZamowieniaRepository.getZamowienia();
    let produktGetAll = ProduktRepository.getProdukt();
    let pozycjaZamowienGetAll = PozycjaZamowienRepository.getZamowienieProdukt();


    Promise.all([zamowienieGetAll, produktGetAll, pozycjaZamowienGetAll]).then(results => {
        const [zam, prod, pozZam] = results;
        res.render('Pages/PozycjaZamówień/FormularzNowejPozycjiZamówień', {
            pozycjaZamowien: {},
            formMode: 'createNew',
            allZamowienia: zam,
            allProdukty: prod,
            allpozycjaZamowien: pozZam,
            pageTitle: 'Nowa pozycja zamówień',
            btnLabel: 'Dodaj',
            formAction: '/pozycjaZamowien/add',
            navLocation: 'pozycjaZamowien',
            validationErrors: []
        });



    });
};



exports.showEditPozycjaZamowieniaForm = (req, res, next) => {
    const idPozycjaZamowien = req.params.idPozycjaZamowien;

    let zamowienieGetAll = ZamowieniaRepository.getZamowienieById(idPozycjaZamowien);
    let produktGetAll = ProduktRepository.getProduktById(idPozycjaZamowien);
    let pozycjaZamowienGetAll = PozycjaZamowienRepository.getZamowienieProduktById(idPozycjaZamowien);

    Promise.all([zamowienieGetAll, produktGetAll, pozycjaZamowienGetAll]).then(results => {
        const [zam, prod, pozZam] = results;
        res.render('Pages/PozycjaZamówień/FormularzNowejPozycjiZamówień', {
            pozycjaZamowien: pozZam,
            formMode: 'edit',
            pageTitle: 'Edycja pozycji zamówień',
            btnLabel: 'Edytuj',
            formAction: '/pozycjaZamowien/edit',
            navLocation: 'pozycjaZamowien',
            validationErrors: [],
            allZamowienia: zam,
            allProdukty: prod,
            allpozycjaZamowien: pozZam
        });



    });


};

exports.showPozycjaZamowieniaDetails = (req, res, next) => {

    const idPozycjaZamowien = req.params.idPozycjaZamowien;
    let allZamowienia, allpozycjaZamowien;
    ZamowieniaRepository.getZamowienieById(idPozycjaZamowien)
        .then(zamowienie => {
            allZamowienia = zamowienie;
            return PozycjaZamowienRepository.getZamowienieProduktById(idPozycjaZamowien);
        })
        .then(pozycjaZamowien => {
            allpozycjaZamowien = pozycjaZamowien;
            res.render('Pages/PozycjaZamówień/FormularzNowejPozycjiZamówień', {
                pozycjaZamowien: pozycjaZamowien,
                formMode: 'showDetails',
                allZamowienia: allZamowienia,
                allpozycjaZamowien: allpozycjaZamowien,
                pageTitle: 'Szczegóły pozycji zamówień',
                formAction: '',
                navLocation: 'pozycjaZamowien',
                validationErrors: []
            });
        });
}


exports.addPozycjaZamowienia = (req, res, next) => {

    let zamowienieGetAll = ZamowieniaRepository.getZamowienia();
    let produktGetAll = ProduktRepository.getProdukt();
    let pozycjaZamowienGetAll = PozycjaZamowienRepository.getZamowienieProdukt();

    const pozycjaZamowieniaData = { ...req.body };
    PozycjaZamowienRepository.createZamowienieProdukt(pozycjaZamowieniaData)
        .then(result => {
            res.redirect('/pozycjaZamowien');
        })
        .catch(err => {
            Promise.all([zamowienieGetAll, produktGetAll, pozycjaZamowienGetAll]).then(results => {
                const [zam, prod, pozZam] = results;
                res.render('Pages/PozycjaZamówień/FormularzNowejPozycjiZamówień', {
                    pozycjaZamowien: pozycjaZamowieniaData,
                    pageTitle: 'Nowa pozycja zamówień',
                    formMode: 'createNew',
                    btnLabel: 'Dodaj',
                    formAction: '/pozycjaZamowien/add',
                    navLocation: 'pozycjaZamowien',
                    validationErrors: err.errors,
                    allZamowienia: zam,
                    allProdukty: prod,
                    allpozycjaZamowien: pozZam
                });

            })


        });

};


exports.updatePozycjaZamowienia = (req, res, next) => {
    const idPozycjaZamowien = req.body.IdZamowienieProdukt;
    const pozycjaZamowieniaData = { ...req.body };

    let zamowienieGetAll = ZamowieniaRepository.getZamowienia();
    let produktGetAll = ProduktRepository.getProdukt();
    let pozycjaZamowienGetAll = PozycjaZamowienRepository.getZamowienieProdukt();

    PozycjaZamowienRepository.updateZamowienieProdukt(idPozycjaZamowien, pozycjaZamowieniaData)
        .then(result => {
            res.redirect('/pozycjaZamowien');
        })
        .catch(err => {
            Promise.all([zamowienieGetAll, produktGetAll, pozycjaZamowienGetAll]).then(results => {
                const [zam, prod, pozZam] = results;
                res.render('Pages/PozycjaZamówień/FormularzNowejPozycjiZamówień', {
                    pozycjaZamowien: pozycjaZamowieniaData,
                    pageTitle: 'Nowa pozycja zamówień',
                    formMode: 'createNew',
                    btnLabel: 'Dodaj',
                    formAction: '/pozycjaZamowien/edit',
                    navLocation: 'pozycjaZamowien',
                    validationErrors: err.errors,
                    allZamowienia: zam,
                    allProdukty: prod,
                    allpozycjaZamowien: pozZam
                });

            })


        });

};

exports.deletePozycjaZamowienia = (req, res, next) => {
    const idPozycjaZamowien = req.params.idPozycjaZamowien;
    PozycjaZamowienRepository.deleteZamowienieProdukt(idPozycjaZamowien)
        .then(() => {
            res.redirect('/pozycjaZamowien');
        });
};



