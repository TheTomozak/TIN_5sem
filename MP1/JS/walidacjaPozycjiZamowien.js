function validateForm() {

    const zamowienie = document.getElementById('Zamowienie');
    const produkt = document.getElementById('Produkt');
    const rabat = document.getElementById('Rabat');
    const ilosc = document.getElementById('Ilosc');



    const errorZamowienie = document.getElementById('errorZamowienie');
    const errorProdukt = document.getElementById('errorProdukt');
    const errorRabat = document.getElementById('errorRabat');
    const errorIlosc = document.getElementById('errorIlosc');


    resetErrors([zamowienie, produkt, rabat, ilosc], [errorZamowienie, errorProdukt, errorRabat, errorIlosc], errorsSummary);

    let valid = true;
    //////////////////////////////////////////////////////////////////////
    //Zamowienie

    if (!checkRequired(zamowienie.value)) {
        valid = false;
        zamowienie.classList.add("error-input");
        errorZamowienie.innerText = "Pole jest wymagane";
    }
    //////////////////////////////////////////////////////////////////////
    //Produkt

    if (!checkRequired(produkt.value)) {
        valid = false;
        produkt.classList.add("error-input");
        errorProdukt.innerText = "Pole jest wymagane";
    } 

    //////////////////////////////////////////////////////////////////////
    //Rabat

    if (rabat.value.length != 0) {
        if (!hasNumber(rabat.value)) {
            valid = false;
            rabat.classList.add("error-input");
            errorRabat.innerText = "Rabat nie może zawierać liter";
        }
    }
    //////////////////////////////////////////////////////////////////////
    //Ilosc

    if (!checkRequired(ilosc.value)) {
        valid = false;
        ilosc.classList.add("error-input");
        errorIlosc.innerText = "Pole jest wymagane";
    } else if (!hasNumber(ilosc.value)) {
        valid = false;
        ilosc.classList.add("error-input");
        errorIlosc.innerText = "Cena musi być liczbą";
    }
   

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;



}
