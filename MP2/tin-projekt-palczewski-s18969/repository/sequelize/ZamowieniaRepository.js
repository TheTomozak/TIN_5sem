const Sequelize = require('sequelize');


const Produkt = require("../../model/sequelize/Produkt");
const Zamowienie = require("../../model/sequelize/Zamowienie");
const ZamowienieProdukt = require("../../model/sequelize/ZamowienieProdukt");

exports.getZamowienia = () => {
    return Zamowienie.findAll();
};

exports.getZamowienieById = (idZamowienie) => {
    return Zamowienie.findByPk(idZamowienie,
        {
            include: [{
                model: ZamowienieProdukt,
                as: 'zamowieniaProdukty',
                include: [{
                    model: Produkt,
                    as: 'produkty'
                }]
            }]
        });
};

exports.createZamowienie = (newZamowienie) => {
    return Zamowienie.create({
        Imie: newZamowienie.Imie,
        Nazwisko: newZamowienie.Nazwisko,
        Email: newZamowienie.Email,
        NumerTelefonu: newZamowienie.NumerTelefonu,
        Kwota: newZamowienie.Kwota,
        DataPrzyjecia: newZamowienie.DataPrzyjecia,
        DataRealizacji: newZamowienie.DataRealizacji
    });
};

exports.updateZamowienie = (idZamowienie, zamowienieData) => {
    const imie = zamowienieData.Imie;
    const nazwisko = zamowienieData.Nazwisko;
    const email = zamowienieData.Email;
    const numerTelefonu = zamowienieData.NumerTelefonu;
    const kwota = zamowienieData.Kwota;
    const dataPrzyjecia = zamowienieData.DataPrzyjecia;
    const dataRealizacji = zamowienieData.DataRealizacji;

    return Zamowienie.update(zamowienieData, {where: {IdZamowienie  : idZamowienie }});
}

exports.deleteZamowienie = (idZamowienie) => {
    return Zamowienie.destroy({
        where: { IdZamowienie : idZamowienie }
    });

}; 
