function validateForm() {

    const nazwa = document.getElementById('Nazwa');
    const typProduktu = document.getElementById('TypProduktu');
    const gwarancja = document.getElementById('Gwarancja');
    const cena = document.getElementById('Cena');
    const kolor = document.getElementById('Kolor');



    const errorNazwa = document.getElementById('errorNazwa');
    const errorTypProduktu = document.getElementById('errorTypProduktu');
    const errorGwarancja = document.getElementById('errorGwarancja');
    const errorCena = document.getElementById('errorCena');
    const errorKolor = document.getElementById('errorKolor');


    resetErrors([nazwa, typProduktu, gwarancja, cena, kolor], [errorNazwa, errorTypProduktu, errorGwarancja, errorCena, errorKolor], errorsSummary);

    let valid = true;
    //////////////////////////////////////////////////////////////////////
    //Nazwa

    if (!checkRequired(nazwa.value)) {
        valid = false;
        nazwa.classList.add("error-input");
        errorNazwa.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(nazwa.value, 2, 60)) {
        valid = false;
        nazwa.classList.add("error-input");
        errorNazwa.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }
    //////////////////////////////////////////////////////////////////////
    //TypProduktu

    if (!checkRequired(typProduktu.value)) {
        valid = false;
        typProduktu.classList.add("error-input");
        errorTypProduktu.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(typProduktu.value, 2, 40)) {
        valid = false;
        typProduktu.classList.add("error-input");
        errorTypProduktu.innerText = "Pole powinno zawierać od 2 do 40 znaków";
    }
    //////////////////////////////////////////////////////////////////////
    //Cena

    if (!checkRequired(cena.value)) {
        valid = false;
        cena.classList.add("error-input");
        errorCena.innerText = "Pole jest wymagane";
    } else if (!hasNumber(cena.value)) {
        valid = false;
        cena.classList.add("error-input");
        errorCena.innerText = "Cena musi być liczbą";
    }
    //////////////////////////////////////////////////////////////////////
    //Kolor

    if (kolor.value.length != 0) {
        if (!checkTextLengthRange(kolor.value, 2, 50)) {
            valid = false;
            kolor.classList.add("error-input");
            errorKolor.innerText = "Pole powinno zawierać od 2 do 50 znaków";
        } else if (hasNumber(kolor.value)) {
            valid = false;
            kolor.classList.add("error-input");
            errorKolor.innerText = "Kolor nie może zawierać liczb";
        }
    }

    //////////////////////////////////////////////////////////////////////
    //Gwarancja

    let nowDate = new Date(),
        month = '' + (nowDate.getMonth() + 1),
        day = '' + nowDate.getDate(),
        year = nowDate.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    const nowString = [year, month, day].join('-');



    if (!checkRequired(gwarancja.value)) {
        valid = false;
        gwarancja.classList.add("error-input");
        errorGwarancja.innerText = "Pole jest wymagane";
    }
    else if (!checkDate(gwarancja.value)) {
        valid = false;
        gwarancja.classList.add("error-input");
        errorGwarancja.innerText = "Pole powinno zawierać datę w formacie yyyy-MM-dd (np. 2000-01-01)";
    } else if (!checkDateIfAfter(gwarancja.value, nowString)) {
        valid = false;
        gwarancja.classList.add("error-input");
        errorGwarancja.innerText = "Data nie może być z przeszłości";
    } 

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;



}
