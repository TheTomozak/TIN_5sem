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
    let allZamowienia, allpozycjaZamowien, allProdukty;
    ZamowieniaRepository.getZamowienia()
        .then(zamowienie => {
            allZamowienia = zamowienie;
        
        })

        ProduktRepository.getProdukt()
        .then(produkty => {
            allProdukty = produkty;
            return PozycjaZamowienRepository.getZamowienieProdukt();
        })
        .then(pozycjaZamowien => {
            allpozycjaZamowien = pozycjaZamowien;
            res.render('Pages/PozycjaZamówień/FormularzNowejPozycjiZamówień', {
                pozycjaZamowien: {},
                formMode: 'createNew',
                allZamowienia: allZamowienia,
                allpozycjaZamowien: allpozycjaZamowien,
                allProdukty: allProdukty,
                pageTitle: 'Nowa pozycja zamówień',
                btnLabel: 'Dodaj',
                formAction: '/pozycjaZamowien/add',
                navLocation: 'pozycjaZamowien'
            });
        });
}


exports.showEditPozycjaZamowieniaForm = (req, res, next) => {
    const idPozycjaZamowien = req.params.idPozycjaZamowien;
    let allZamowienia, allpozycjaZamowien;
    ZamowieniaRepository.getZamowienieById(idPozycjaZamowien)
        .then(zamowienie => {
            allZamowienia = zamowienie;
        
        })

        ProduktRepository.getProduktById(idPozycjaZamowien)
        .then(produkty => {
            allProdukty = produkty;
            return PozycjaZamowienRepository.getZamowienieProduktById(idPozycjaZamowien);
        })
        .then(pozycjaZamowien => {
            allpozycjaZamowien = pozycjaZamowien;
            res.render('Pages/PozycjaZamówień/FormularzNowejPozycjiZamówień', {
                pozycjaZamowien: pozycjaZamowien,
                formMode: 'edit',
                allZamowienia: allZamowienia,
                allpozycjaZamowien: allpozycjaZamowien,
                allProdukty: allProdukty,
                pageTitle: 'Edycja pozycji zamówień',
                btnLabel: 'Edytuj',
                formAction: '/pozycjaZamowien/edit',
                navLocation: 'pozycjaZamowien'
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
                navLocation: 'pozycjaZamowien'
            });
        });
}




// 
//

exports.addPozycjaZamowienia = (req, res, next) => {
    const pozycjaZamowieniaData = { ...req.body };
    PozycjaZamowienRepository.createZamowienieProdukt(pozycjaZamowieniaData)
        .then(result => {
            res.redirect('/pozycjaZamowien');
        });
};

exports.updatePozycjaZamowienia = (req, res, next) => {
    const idPozycjaZamowien = req.body.IdZamowienieProdukt;
    const pozycjaZamowieniaData = { ...req.body };
    PozycjaZamowienRepository.updateZamowienieProdukt(idPozycjaZamowien, pozycjaZamowieniaData)
        .then(result => {
            res.redirect('/pozycjaZamowien');
        });
};

exports.deletePozycjaZamowienia = (req, res, next) => {
    const idPozycjaZamowien = req.params.idPozycjaZamowien;
    PozycjaZamowienRepository.deleteZamowienieProdukt(idPozycjaZamowien)
        .then(() => {
            res.redirect('/pozycjaZamowien');
        });
};



