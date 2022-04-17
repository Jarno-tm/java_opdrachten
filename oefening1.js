function oefening1() {
    // Maak hier oefening 1
    let tekst = "";
    validatie("form", "voornaam", "first name is required")
    validatie("form", "familienaam", "last name is required")
    validatie("form", "email", "email is required")
    validatie("form", "address", "address is required")
    validatie("form", "land", "Country is required")
    validatie("form", "provincie", "Province is required")
    validatie("form", "postcode", "Postal Code is required")
    valideerEmail()
    valideerPostcode()
    const element = document.getElementById('melding');
    const container = document.getElementById('meldingcontainer');
    const h4 = document.getElementById('meldingheader');
    if (tekst != "") {
        container.classList.add("alert", "alert-danger", "col-md-3");
        element.innerText = tekst;
        h4.innerText = "You messed up...";
    } else {
        container.classList.remove("alert", "alert-danger", "col-md-3")
        container.classList.add("alert", "alert-succes", "col-md-3")
    }

    function validatie(form, field, melding) {
        let veld = document.forms[form][field].value
        if (field == "land") {
            if (veld == "Choose a Country") {
                tekst += "\n" + melding
            }
        } else if (field == "provincie") {
            if (veld == "Choose a Province") {
                tekst += "\n" + melding
            }
        } else if (veld == "") {
            tekst += "\n" + melding
        }
    }

    function valideerPostcode() {
        const postcode = document.forms["form"]["postcode"].value
        if (postcode < 0 || postcode > 9999 || !isNaN(postcode)) {
            tekst += "\n" + "postcode is not valid"
        }
    }

    function valideerEmail() {
        const email = document.forms["form"]["email"].value
        let at = String(email).indexOf("@")
        let punt = String(email).indexOf(".")
        if (at < 3 || dot - 3 <= at) {
            tekst += "\nEmail is not valid"
        }
    }
}