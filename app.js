import { declareEvent } from "./declareEvents.js";
import { showHeaderCountries } from "./functions.js";
import { getCountries } from "./functions.js";

window.onload = () =>
{
    doApi();
    declareEvent();
}

const doApi = async () => 
{
    let url = "https://restcountries.com/v3.1/all?fields=name,population,region,languages,currencies,capital,flags,latlng,cca3,borders"
    let resp = await fetch(url);
    let data = await resp.json();
    getCountries(data);
    showHeaderCountries();
}