const Sequelize = require('sequelize');


const Produkt = require("../../model/sequelize/Produkt");
const Zamowienie = require("../../model/sequelize/Zamowienie");
const ZamowienieProdukt = require("../../model/sequelize/ZamowienieProdukt");

exports.getProdukt = () => {
    return Produkt.findAll();
};

exports.getProduktById = (idProduktu) => {
    return Produkt.findByPk(idProduktu,
        {
            include: [{
                model: ZamowienieProdukt,
                as: 'zamowieniaProdukty',
                include: [{
                    model: Zamowienie,
                    as: 'zamowienia'
                }]
            }]
        });
};

exports.createProdukt = (newProdukt) => {
    return Produkt.create({
        Nazwa: newProdukt.Nazwa,
        TypProduktu: newProdukt.TypProduktu,
        Gwarancja: newProdukt.Gwarancja,
        Cena: newProdukt.Cena,
        Kolor: newProdukt.Kolor
    });
};

exports.updateProdukt = (idProduktu, produktData) => {
    const nazwa = produktData.Nazwa;
    const typProduktu = produktData.TypProduktu;
    const gwarancja = produktData.Gwarancjal
    const cena = produktData.Cena; 
    const kolor = produktData.Kolor;
    return Produkt.update(produktData, {where: {IdProdukt : idProduktu }});
}

exports.deleteProdukt = (idProduktu) => {
    return Produkt.destroy({
        where: { IdProdukt: idProduktu }
    });

}; 
