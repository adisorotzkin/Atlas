import { showCountry, showHeaderCountries2 } from "./functions.js"

export const declareEvent = () =>
{
    let idForm = document.querySelector("#id_form")
    let idInput = document.querySelector("#id_input")
    idForm.addEventListener("submit", e => 
    {
        e.preventDefault()
        let val = idInput.value;
        idInput.value = "";
        showCountry(val);
    })

    let idUSA= document.querySelector("#id_USA")
    idUSA.addEventListener("click", () => 
    {
        showHeaderCountries2("USA");
    })

    let idIsrael = document.querySelector("#id_israel")
    idIsrael.addEventListener("click", () => 
    {
        showHeaderCountries2("isr");
    })

    let idUK = document.querySelector("#id_UK")
    idUK.addEventListener("click", () => 
    {
        showHeaderCountries2("gbr");
    })

    let idFrance = document.querySelector("#id_France")
    idFrance.addEventListener("click", () => 
    {
        showHeaderCountries2("fra");
    })

    let idThailand = document.querySelector("#id_thailand")
    idThailand.addEventListener("click", () => 
    {
        showHeaderCountries2("tha");
    })

    
}