const sequelize = require('./sequelize');

const Produkt = require('../../model/sequelize/Produkt');
const Zamowienie = require('../../model/sequelize/Zamowienie');
const ZamowienieProdukt = require('../../model/sequelize/ZamowienieProdukt');

module.exports = () => {
    Produkt.hasMany(ZamowienieProdukt, { as: 'zamowieniaProdukty', foreignKey: { name: 'Produkt_IdProdukt', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    ZamowienieProdukt.belongsTo(Produkt, { as: 'produkty', foreignKey: { name: 'Produkt_IdProdukt', allowNull: false } });

    Zamowienie.hasMany(ZamowienieProdukt, { as: 'zamowieniaProdukty', foreignKey: { name: 'Zamowienie_IdZamowienie', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    ZamowienieProdukt.belongsTo(Zamowienie, { as: 'zamowienia', foreignKey: { name: 'Zamowienie_IdZamowienie', allowNull: false } });


    let allProdukty, allZamowienia;

    return sequelize
        .sync({ force: false })
        .then(() => {
            return Produkt.findAll();
        })
        .then(produkt => {
            if (!produkt || produkt.length == 0) {
                return Produkt.bulkCreate([
                    { Nazwa: 'Nintendo Switch', TypProduktu: 'Konsola', Gwarancja: '2', Cena: 1499, Kolor: 'Czerwono-niebieski' },
                    { Nazwa: 'Play Station 5', TypProduktu: 'Konsola', Gwarancja: '2', Cena: 2299, Kolor: 'Biały' },
                    { Nazwa: 'Corsair K55 RGB', TypProduktu: 'Klawiatura', Gwarancja: '2', Cena: 199, Kolor: 'Czarna' },
                    { Nazwa: 'Apple MacBook Air M1/8GB/256/Mac OS', TypProduktu: 'Laptop', Gwarancja: '3', Cena: 5199, Kolor: 'Space Gray' },
                    { Nazwa: 'Apple iPhone 12 Mini 64GB 5G', TypProduktu: 'Smartfon', Gwarancja: '2', Cena: 3599, Kolor: 'Green' },
                    { Nazwa: 'TP-Link Archer C6 (1200Mb/s a/b/g/n/ac) DualBand', TypProduktu: 'Router', Gwarancja: '5', Cena: 159, Kolor: 'Czarny' }
                ])
                    .then(() => {
                        return Produkt.findAll();
                    });
            } else {
                return produkt;
            }
        })
        .then(produkt => {
            allProdukty = produkt;
            return Zamowienie.findAll();
        })
        .then(zamowienia => {
            if (!zamowienia || zamowienia.length == 0) {
                return Zamowienie.bulkCreate([
                    { DataPrzyjecia: '2019-07-13', DataRealizacji: '2019-07-26', Kwota: '2299', Imie: 'Jan', Nazwisko: 'Kowalski', Email: 'janKowalski@gmail.com', NumerTelefonu: '666999666', password: 'JanKowalski' },
                    { DataPrzyjecia: '2019-03-01', DataRealizacji: '2019-04-04', Kwota: '1499', Imie: 'Karolina', Nazwisko: 'Suwak', Email: 'karolinaSuwak@gmail.com', NumerTelefonu: '696969699', password: 'KarolinaSuwak' },
                    { DataPrzyjecia: '2020-09-23', DataRealizacji: '2020-09-27', Kwota: '398', Imie: 'Łukasz', Nazwisko: 'Wietnamski', Email: 'lukaszWietnamski@gmail.com', NumerTelefonu: '123456789', password: 'LukaszWietnamski' },
                    { DataPrzyjecia: '2020-10-23', DataRealizacji: '2020-10-28', Kwota: '159', Imie: 'Mikołaj', Nazwisko: 'Kopernik', Email: 'mikolajKopernik@gmail.com', NumerTelefonu: '268102473', password: 'MikolajKopernik' },
                    { DataPrzyjecia: '2020-11-01', DataRealizacji: '2020-11-20', Kwota: '5199', Imie: 'Wojtek', Nazwisko: 'Morelka', Email: 'wojtekMorelka@gmail.com', NumerTelefonu: '726289018', password: 'WojtekMorelka' }
                ])
                    .then(() => {
                        return Zamowienie.findAll();
                    });

            } else {
                return zamowienia;
            }
        })
        .then(zamowienia => {
            allZamowienia = zamowienia;
            return ZamowienieProdukt.findAll();
        })
        .then(zamPro => {
            if (!zamPro || zamPro.length == 0) {
                return ZamowienieProdukt.bulkCreate([
                    { Zamowienie_IdZamowienie: allZamowienia[0].IdZamowienie, Produkt_IdProdukt: allProdukty[0].IdProdukt, Ilosc: 1 },
                    { Zamowienie_IdZamowienie: allZamowienia[1].IdZamowienie, Produkt_IdProdukt: allProdukty[1].IdProdukt, Ilosc: 1 },
                    { Zamowienie_IdZamowienie: allZamowienia[2].IdZamowienie, Produkt_IdProdukt: allProdukty[2].IdProdukt, Ilosc: 2 },
                    { Zamowienie_IdZamowienie: allZamowienia[3].IdZamowienie, Produkt_IdProdukt: allProdukty[5].IdProdukt, Ilosc: 2 },
                    { Zamowienie_IdZamowienie: allZamowienia[4].IdZamowienie, Produkt_IdProdukt: allProdukty[3].IdProdukt, Ilosc: 1 }
                ]);
            } else {
                return zamPro;
            }
        });

};