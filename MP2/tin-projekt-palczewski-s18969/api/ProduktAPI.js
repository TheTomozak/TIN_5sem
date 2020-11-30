const ProduktRepository = require('../repository/sequelize/ProduktRepository');

exports.getProdukty = (req, res, next) => {
    ProduktRepository.getProdukt()
        .then(prod => {
            res.status(200).json(prod);
        })
        .catch(err => {
           console.log(err);
        });
};

exports.getProduktById = (req, res, next) => {
    const produktID = req.params.produktID;
    ProduktRepository.getProduktById(produktID)
        .then(prod => {
            if(!prod) {
                res.status(404).json({
                    message: 'Produkt z id: '+produktID+' nie został znaleziony'
                })
            } else {
                res.status(200).json(prod);
            }
        });
};

exports.createProdukt = (req, res, next) => {
    ProduktRepository.createProdukt(req.body)
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

exports.updateProdukt = (req, res, next) => {
    const produktID = req.params.produktID;
    ProduktRepository.updateProdukt(produktID, req.body)
        .then(result => {
           res.status(200).json({message: 'Produkt zaktualizowany!', prod: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};

exports.deleteProdukt = (req, res, next) => {
    const produktID = req.params.produktID;
    ProduktRepository.deleteProdukt(produktID)
        .then(result => {
            res.status(200).json({message: 'Usunięto produkt o id '+produktID , prod: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};