CREATE SCHEMA IF NOT EXISTS `TomoTechShop`;

CREATE TABLE IF NOT EXISTS `TomoTechShop`.`Produkt`
    ( `IdProdukt` INT UNSIGNED NOT NULL AUTO_INCREMENT ,
      `Nazwa` VARCHAR(64) NOT NULL ,
      `TypProduktu` VARCHAR(64) NOT NULL ,
      `Gwarancja` DATE NOT NULL ,
      `Cena` DECIMAL(10,2) NOT NULL ,
      `Kolor` VARCHAR(64) NULL ,
      PRIMARY KEY (`IdProdukt`),
      UNIQUE INDEX `Produkt_IdProdukt_UNIQUE` (`IdProdukt` ASC)
    ) ENGINE = InnoDB CHARSET=utf8 COLLATE utf8_general_ci;

CREATE TABLE IF NOT EXISTS `TomoTechShop`.`Zamowienie`
    ( `IdZamowienie` INT UNSIGNED NOT NULL AUTO_INCREMENT ,
      `DataPrzyjecia` DATE NOT NULL ,
      `DataRealizacji` DATE NOT NULL ,
      `Kwota` DECIMAL(10,2) NOT NULL ,
	  `Imie` VARCHAR(32) NOT NULL ,
	  `Nazwisko` VARCHAR(64) NOT NULL ,
	  `Email` VARCHAR(64) NOT NULL ,
	  `NumerTelefonu` INT NULL ,
      PRIMARY KEY (`IdZamowienie`),
      UNIQUE INDEX `Zamowienie_IdZamowienie_UNIQUE` (`IdZamowienie` ASC)
    ) ENGINE = InnoDB CHARSET=utf8 COLLATE utf8_general_ci;

CREATE TABLE IF NOT EXISTS `TomoTechShop`.`ZamowienieProdukt`
    ( `IdZamowienieProdukt` INT UNSIGNED NOT NULL AUTO_INCREMENT ,
      `Rabat` INT NULL ,
      `Ilosc` INT NOT NULL ,
      `Zamowienie_IdZamowienie` INT UNSIGNED NOT NULL ,
      `Produkt_IdProdukt` INT UNSIGNED NOT NULL ,
      PRIMARY KEY (`IdZamowienieProdukt`),
      UNIQUE INDEX `ZamowienieProdukt_IdZamowienieProdukt_UNIQUE` (`IdZamowienieProdukt` ASC),
      CONSTRAINT `Produkt_fk` FOREIGN KEY (`Produkt_IdProdukt`) REFERENCES `TomoTechShop`.`Produkt` (`IdProdukt`),
      CONSTRAINT `Zamowienie_fk` FOREIGN KEY (`Zamowienie_IdZamowienie`) REFERENCES `TomoTechShop`.`Zamowienie` (`IdZamowienie`)
    ) ENGINE = InnoDB CHARSET=utf8 COLLATE utf8_general_ci;

INSERT IGNORE INTO `TomoTechShop`.`Produkt` (`IdProdukt`, `Nazwa`, `TypProduktu`, `Gwarancja`, `Cena`, `Kolor`) VALUES
(1,'Nintendo Switch','Konsola','2022-27-11',1499,'Czerwono-niebieski' ),
(2,'Play Station 5','Konsola','2022-27-11',2299,'Biały' ),
(3,'Corsair K55 RGB','Klawiatura','2022-27-11',199,'Czarna' );

INSERT IGNORE INTO `TomoTechShop`.`Zamowienie` (`IdZamowienie` ,`DataPrzyjecia`, `DataRealizacji`, `Kwota`, `Imie`, `Nazwisko`, `Email`, `NumerTelefonu`) VALUES
(1,'2019-13-07', '2019-26-07',2299, 'Jan', 'Kowalski', 'janKowalski@gmail.com',666999666  ),
(2,'2019-01-03', '2019-04-04',1499, 'Karolina', 'Suwak', 'karolinaSuwak@gmail.com',696969699  ),
(3,'2020-23-09', '2020-27-09',398, 'Łukasz', 'Wietnamski', 'lukaszWietnamski@gmail.com',123456789  );

INSERT IGNORE INTO `TomoTechShop`.`ZamowienieProdukt` (`IdZamowienieProdukt`, `Rabat` , `Zamowienie_IdZamowienie` , `Produkt_IdProdukt`, `Ilosc`) VALUES
(1 ,0, 1, 1, 1),
(2 ,0, 2, 2, 1),
(3 ,0, 3, 3, 2);