const ZamowieniaRepository = require('../repository/sequelize/ZamowieniaRepository');

exports.getZamowienia = (req, res, next) => {
    ZamowieniaRepository.getZamowienia()
        .then(prod => {
            res.status(200).json(prod);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getZamowienieById = (req, res, next) => {
    const zamowienieId = req.params.zamowienieId;
    ZamowieniaRepository.getZamowienieById(zamowienieId)
        .then(prod => {
            if (!prod) {
                res.status(404).json({
                    message: 'Zamowienie z id: ' + zamowienieId + ' nie zostało znalezione'
                })
            } else {
                res.status(200).json(prod);
            }
        });
};

exports.createZamowienie = (req, res, next) => {
    ZamowieniaRepository.createZamowienie(req.body)
        .then(newObj => {
            res.status(201).json(newObj);
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.updateZamowienie = (req, res, next) => {
    const zamowienieId = req.params.zamowienieId;
    ZamowieniaRepository.updateZamowienie(zamowienieId, req.body)
        .then(result => {
            res.status(200).json({ message: 'Zamowienie zaktualizowane!', prod: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};

exports.deleteZamowienie = (req, res, next) => {
    const zamowienieId = req.params.zamowienieId;
    ZamowieniaRepository.deleteZamowienie(zamowienieId)
        .then(result => {
            if (result == 0) {
                res.status(404).json({ message: 'Zamowienia o id ' + zamowienieId + ' nie ma w bazie danych', prod: result });
            } else {
                res.status(200).json({ message: 'Usunięto zamówienie o id ' + zamowienieId, prod: result });
            }
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};