function validateForm() {

    const kupiec = document.getElementById('Kupiec');
    const produkt = document.getElementById('Produkt');
    const rabat = document.getElementById('Rabat');
    const ilosc = document.getElementById('Ilosc');



    const errorKupiec = document.getElementById('errorKupiec');
    const errorProdukt = document.getElementById('errorProdukt');
    const errorRabat = document.getElementById('errorRabat');
    const errorIlosc = document.getElementById('errorIlosc');

    console.log("Cos");

    resetErrors([kupiec, produkt, rabat, ilosc], [errorKupiec, errorProdukt, errorRabat, errorIlosc], errorsSummary);

    let valid = true;
    //////////////////////////////////////////////////////////////////////
    //kupiec

    if (!checkRequired(kupiec.value)) {
        valid = false;
        kupiec.classList.add("error-input");
        errorKupiec.innerText = "Pole jest wymagane";
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
        }else if (Math.sign(rabat.value) === -1) {
            valid = false;
            rabat.classList.add("error-input");
            errorRabat.innerText = "Rabat musi być liczbą DODATNIĄ";
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
    }else if (Math.sign(ilosc.value) === -1) {
        valid = false;
        ilosc.classList.add("error-input");
        errorIlosc.innerText = "Ilosc musi być liczbą DODATNIĄ";
    } else if (Math.sign(ilosc.value) === 0) {
        valid = false;
        ilosc.classList.add("error-input");
        errorIlosc.innerText = "Ilosc nie może równać się 0";
    }


    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;



}
