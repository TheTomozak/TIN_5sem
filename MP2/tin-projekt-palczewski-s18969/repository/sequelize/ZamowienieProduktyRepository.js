const Sequelize = require('sequelize');


const Produkt = require("../../model/sequelize/Produkt");
const Zamowienie = require("../../model/sequelize/Zamowienie");
const ZamowienieProdukt = require("../../model/sequelize/ZamowienieProdukt");


exports.getZamowienieProdukt = () => {
    return ZamowienieProdukt.findAll({
        include: [
            {
                model: Zamowienie,
                as: 'zamowienia'
            },
            {
                model: Produkt,
                as: 'produkty'
            }]
    });
};

exports.getZamowienieProduktById = (zamowienieProduktID) => {
    return ZamowienieProdukt.findByPk(zamowienieProduktID, {
        include: [
            {
                model: Zamowienie,
                as: 'zamowienia'
            },
            {
                model: Produkt,
                as: 'produkty'
            }]
    });
};

exports.createZamowienieProdukt = (data) => {
    console.log(JSON.stringify(data));

    return ZamowienieProdukt.create({
        Zamowienie_IdZamowienie: data.Zamowienie_IdZamowienie,
        Produkt_IdProdukt: data.Produkt_IdProdukt,
        Rabat: data.Rabat,
        Ilosc: data.Ilosc

    });
};

exports.updateZamowienieProdukt = (ZamowienieProduktId, data) => {

    console.log(JSON.stringify(data));


    return ZamowienieProdukt.update(data, {where: {IdZamowienieProdukt : ZamowienieProduktId }});
}

exports.deleteZamowienieProdukt = (ZamowienieProduktId) => {
    return ZamowienieProdukt.destroy({
        where: { IdZamowienieProdukt: ZamowienieProduktId }
    });
}

exports.deleteManyZamowienieProdukts = (ZamowienieProduktIds) => {
    return ZamowienieProdukt.find({ IdZamowienieProdukt: { [Sequelize.Op.in]: ZamowienieProduktIds }})
}


