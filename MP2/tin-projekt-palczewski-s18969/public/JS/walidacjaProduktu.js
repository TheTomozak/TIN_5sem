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
        console.log(cena.value);
    } else if (!hasNumber(cena.value)) {
        valid = false;
        cena.classList.add("error-input");
        errorCena.innerText = "Cena musi być liczbą";
    } else if (Math.sign(cena.value) === -1) {
        valid = false;
        cena.classList.add("error-input");
        errorCena.innerText = "Cena musi być liczbą DODATNIĄ";
    } else if (Math.sign(cena.value) === 0) {
        valid = false;
        cena.classList.add("error-input");
        errorCena.innerText = "Cena nie może równać się 0";
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

    if (!checkRequired(gwarancja.value)) {
        valid = false;
        gwarancja.classList.add("error-input");
        errorGwarancja.innerText = "Pole jest wymagane";
    } else if (!hasNumber(gwarancja.value)) {
        valid = false;
        gwarancja.classList.add("error-input");
        errorGwarancja.innerText = "Gwarancja musi być liczbą";
    }else if (Math.sign(gwarancja.value) === -1) {
        valid = false;
        cena.classList.add("error-input");
        errorGwarancja.innerText = "Gwarancja musi być liczbą DODATNIĄ";
    } else if (gwarancja.value !=100 && gwarancja.value > 12  ) {
        valid = false;
        cena.classList.add("error-input");
        errorGwarancja.innerText = "Gwarancja nie może być większa niż 12 lat, jeśli chcesz dać gwarancję wieczystą to wpisz 100";
    }


    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;




}
