function validateForm() {

    const imie = document.getElementById('Imie');
    const nazwisko = document.getElementById('Nazwisko');
    const kwota = document.getElementById('Kwota');
    const email = document.getElementById('Email');
    const numerTel = document.getElementById('NumerTel');
    const dataPrzyjecia = document.getElementById('DataPrzyjecia');
    const dataRealizacji = document.getElementById('DataRealizacji');


    const errorImie = document.getElementById('errorImie');
    const errorNazwisko = document.getElementById('errorNazwisko');
    const errorKwota = document.getElementById('errorKwota');
    const errorEmail = document.getElementById('errorEmail');
    const errorNumerNumerTel = document.getElementById('errorNumerNumerTel');
    const errorDataPrzyjecia = document.getElementById('errorDataPrzyjecia');
    const errorDataRealizacji = document.getElementById('errorDataRealizacji');

    resetErrors([imie, nazwisko, kwota, email, numerTel, dataPrzyjecia, dataRealizacji], [errorImie, errorNazwisko, errorKwota, errorEmail, errorNumerNumerTel, errorDataPrzyjecia, errorDataRealizacji], errorsSummary);

    let valid = true;
    //////////////////////////////////////////////////////////////////////
    //Imie

    if (!checkRequired(imie.value)) {
        valid = false;
        imie.classList.add("error-input");
        errorImie.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(imie.value, 2, 60)) {
        valid = false;
        imie.classList.add("error-input");
        errorImie.innerText = "Pole powinno zawierać od 2 do 40 znaków";
    } else if (hasNumber(imie.value)) {
        valid = false;
        imie.classList.add("error-input");
        errorImie.innerText = "Imie nie może zawierać liczb";
    }
    //////////////////////////////////////////////////////////////////////
    //Nazwisko

    if (!checkRequired(nazwisko.value)) {
        valid = false;
        nazwisko.classList.add("error-input");
        errorNazwisko.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(nazwisko.value, 2, 60)) {
        valid = false;
        nazwisko.classList.add("error-input");
        errorNazwisko.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    } else if (hasNumber(nazwisko.value)) {
        valid = false;
        nazwisko.classList.add("error-input");
        errorNazwisko.innerText = "Nazwisko nie może zawierać liczb";
    }
    //////////////////////////////////////////////////////////////////////
    //Kwota

    if (!checkRequired(kwota.value)) {
        valid = false;
        kwota.classList.add("error-input");
        errorKwota.innerText = "Pole jest wymagane";
    } else if (!hasNumber(kwota.value)) {
        valid = false;
        imie.classList.add("error-input");
        errorKwota.innerText = "Kwota musi być liczbą";
    }
    //////////////////////////////////////////////////////////////////////
    //Email

    if (!checkRequired(email.value)) {
        valid = false;
        email.classList.add("error-input");
        errorEmail.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(email.value, 5, 60)) {
        valid = false;
        email.classList.add("error-input");
        errorEmail.innerText = "Pole powinno zawierać od 5 do 60 znaków";
    } else if (!checkEmail(email.value)) {
        valid = false;
        email.classList.add("error-input");
        errorEmail.innerText = "Pole powinno zawierać prawidłowy adres email";
    }
    //////////////////////////////////////////////////////////////////////
    //NumerTelefonu

    if(numerTel.value.length != 0){
        if (!checkTextLengthRange(numerTel.value, 9, 12)) {
            valid = false;
            numerTel.classList.add("error-input");
            errorNumerNumerTel.innerText = "Pole powinno zawierać od 9 do 12 znaków";
        }
    }
    
    //////////////////////////////////////////////////////////////////////
    //DataPrzyjecia

    let nowDate = new Date(),
        month = '' + (nowDate.getMonth() + 1),
        day = '' + nowDate.getDate(),
        year = nowDate.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    const nowString = [year, month, day].join('-');



    if (!checkRequired(dataRealizacji.value)) {
        valid = false;
        dataRealizacji.classList.add("error-input");
        errorDataRealizacji.innerText = "Pole jest wymagane";
    }

    if (!checkRequired(dataPrzyjecia.value)) {
        valid = false;
        dataPrzyjecia.classList.add("error-input");
        errorDataPrzyjecia.innerText = "Pole jest wymagane";
    }
    else if (!checkDate(dataPrzyjecia.value)) {
        valid = false;
        dataPrzyjecia.classList.add("error-input");
        errorDataPrzyjecia.innerText = "Pole powinno zawierać datę w formacie yyyy-MM-dd (np. 2000-01-01)";
    } else if (checkDateIfAfter(dataPrzyjecia.value, nowString)) {
        valid = false;
        dataPrzyjecia.classList.add("error-input");
        errorDataPrzyjecia.innerText = "Data nie może być z przyszłości";
    } else if (checkRequired(dataRealizacji.value) && checkDate(dataRealizacji.value)
        && !checkDateIfAfter(dataRealizacji.value, dataPrzyjecia.value)) {
        //jeśli data od oraz data do jest poprawna, sprawdzamy kolejność dat
        valid = false;
        dataRealizacji.classList.add("error-input");
        errorDataRealizacji.innerText = "Data realizacji powinna być późniejsza niż data przyjęcia";
    }

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;



}




