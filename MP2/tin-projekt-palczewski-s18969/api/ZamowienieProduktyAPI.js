const ZamowieniaProduktyRepository = require('../repository/sequelize/ZamowienieProduktyRepository');

exports.getZamowieniaProdukty = (req, res, next) => {
    ZamowieniaProduktyRepository.getZamowienieProdukt()
        .then(prod => {
            res.status(200).json(prod);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getZamowieniaProduktyById = (req, res, next) => {
    const zamowieniaProduktyID = req.params.zamowieniaProduktyID;
    ZamowieniaProduktyRepository.getZamowienieProduktById(zamowieniaProduktyID)
        .then(prod => {
            if (!prod) {
                res.status(404).json({
                    message: 'ZamowienieProdukt z id: ' + zamowieniaProduktyID + ' nie zostało znalezione'
                })
            } else {
                res.status(200).json(prod);
            }
        });
};

exports.createZamowieniaProdukty = (req, res, next) => {
    ZamowieniaProduktyRepository.createZamowienieProdukt(req.body)
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

exports.updateZamowieniaProdukty = (req, res, next) => {
    const zamowieniaProduktyID = req.params.zamowieniaProduktyID;
    ZamowieniaProduktyRepository.updateZamowienieProdukt(zamowieniaProduktyID, req.body)
        .then(result => {
            res.status(200).json({ message: 'ZamowienieProdukt zaktualizowane!', prod: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};

exports.deleteZamowieniaProdukty = (req, res, next) => {
    const zamowieniaProduktyID = req.params.zamowieniaProduktyID;
    ZamowieniaProduktyRepository.deleteZamowienieProdukt(zamowieniaProduktyID)
        .then(result => {
            if (result == 0) {
                res.status(404).json({ message: 'ZamowieniaProduktu o id ' + zamowieniaProduktyID + ' nie ma w bazie danych', prod: result });
            } else {
                res.status(200).json({ message: 'Usunięto ZamowienieProdukt o id ' + zamowieniaProduktyID, prod: result });
            }
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};


// exports.deleteManyZamowieniaProdukty = (req, res, next) => {    ?????????????????????????????????????????????????
//     const zamowieniaProduktyID  = req.params.zamowieniaProduktyID;
//     ZamowieniaProduktyRepository.deleteManyZamowienieProdukts(zamowieniaProduktyID)
//         .then(result => {
//             res.status(200).json({message: 'Usunięto Zamowienie o id '+zamowieniaProduktyID , prod: result});
//         })
//         .catch(err => {
//             if (!err.statusCode) {
//                 err.statusCode = 500;
//             }
//             next(err);
//         });
// };
