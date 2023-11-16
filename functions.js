
import Country from "./countryClass.js";

let contries = [];
let HeaderCountries = 
[
    "united states",
    "israel",
    "united kingdom",
    "france",
    "thailand"
  ]

export const getCountries = (data) =>
{
    contries = data;
}

const hideLoading = () => 
{
    document.querySelector("#id_loading").style.display = "none";
    document.querySelector("#id_parent").style.display = "block";
}

export const showHeaderCountries = () => 
{
    hideLoading();
    document.querySelector("#id_parent").innerHTML = "";
    // contries = data;
    let wantedCountries = [];
    wantedCountries = contries.filter((item) =>
        HeaderCountries.includes(item.name.common.toLowerCase())
    )
    wantedCountries.forEach((item) => 
    {
      let country = new Country("#id_parent", item);
      country.render1();
    })
}

export const showCountry = (country_name) =>
{
    document.querySelector("#id_parent").innerHTML = "";
    let myCountries = contries.filter((item) =>
        item.name.common.toLowerCase().includes(country_name.toLowerCase())
    );
    if(myCountries.length == 0)
    {
        alert("No matching result found");
    }
    else
    {
        myCountries.forEach((item) => 
        {
            let country = new Country("#id_parent", item);
            country.render1();
        });
    }
}

export const showHeaderCountries2 = (code) =>
{
    hideLoading();
    document.querySelector("#id_parent").innerHTML = "";
    let myCountries = contries.filter((item) =>
        item.cca3.toLowerCase().includes(code.toLowerCase())
    );
    if(myCountries.length == 0)
    {
        alert("No matching result found");
    }
    else
    {
        myCountries.forEach((item) => 
        {
            let country = new Country("#id_parent", item);
            country.render1();
        });
    }
}

export const codeToName = async (code) => 
{
    let url = `https://restcountries.com/v3.1/alpha/${code}`;
    let resp = await fetch(url);
    let data = await resp.json();
    return data[0].name.common;
}




