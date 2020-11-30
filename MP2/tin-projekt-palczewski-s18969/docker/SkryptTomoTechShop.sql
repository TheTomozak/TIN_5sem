CREATE SCHEMA IF NOT EXISTS `TomoTechShop`;

CREATE TABLE IF NOT EXISTS `TomoTechShop`.`Produkt`
    ( `IdProdukt` INT UNSIGNED NOT NULL AUTO_INCREMENT ,
      `Nazwa` VARCHAR(64) NOT NULL ,
      `TypProduktu` VARCHAR(64) NOT NULL ,
      `Gwarancja` INT NOT NULL ,
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
(1,'Nintendo Switch','Konsola',2,1499,'Czerwono-niebieski' ),
(2,'Play Station 5','Konsola',2,2299,'Biały' ),
(3,'Corsair K55 RGB','Klawiatura',2,199,'Czarny' ),
(4,'Apple MacBook Air M1/8GB/256/Mac OS','Laptop',3,5199,'Space Gray' ),
(5,'Apple iPhone 12 Mini 64GB 5G','Smartfon',2,3599,'Green ' ),
(6,'TP-Link Archer C6 (1200Mb/s a/b/g/n/ac) DualBand','Router',5,159,'Czarny' );

INSERT IGNORE INTO `TomoTechShop`.`Zamowienie` (`IdZamowienie` ,`DataPrzyjecia`, `DataRealizacji`, `Kwota`, `Imie`, `Nazwisko`, `Email`, `NumerTelefonu`) VALUES
(1,'2019-07-13', '2019-07-26',2299, 'Jan', 'Kowalski', 'janKowalski@gmail.com',666999666  ),
(2,'2019-03-01', '2019-04-04',1499, 'Karolina', 'Suwak', 'karolinaSuwak@gmail.com',696969699  ),
(3,'2020-09-23', '2020-09-27',398, 'Łukasz', 'Wietnamski', 'lukaszWietnamski@gmail.com',123456789  ),
(4,'2020-10-23', '2020-10-28',159, 'Mikołaj', 'Kopernik', 'mikolajKopernik@gmail.com',268102473  ),
(5,'2020-11-01', '2020-11-20',5199, 'Wojtek', 'Morelka', 'wojtekMorelka@gmail.com',726289018  );

INSERT IGNORE INTO `TomoTechShop`.`ZamowienieProdukt` (`IdZamowienieProdukt`, `Rabat` , `Zamowienie_IdZamowienie` , `Produkt_IdProdukt`, `Ilosc`) VALUES
(1 ,0, 1, 1, 1),
(2 ,0, 2, 2, 1),
(3 ,0, 3, 3, 2),
(4 ,0, 4, 6, 2),
(5 ,0, 5, 4, 1);
