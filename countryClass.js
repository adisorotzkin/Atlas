
import { codeToName } from "./functions.js";
import { showCountry } from "./functions.js";
export default class Country
{
    constructor(_parent, _item)
    {
        this.parent = _parent;
        this.name = _item.name.common;
        this.pop = _item.population;
        this.region = _item.region;
        this.languages = _item.languages? Object.values(_item.languages).join() : "none";
        this.coin = Object.keys(_item.currencies);
        this.coinDescription = Object.values(_item.currencies)[0].name;
        this.capital = _item.capital? _item.capital : "none";
        this.flag = _item.flags.png;
        this.lat = _item.latlng[0];
        this.lon = _item.latlng[1];
        this.countryCode = _item.cca3;
        this.borders = _item.borders;
        // this.map = _item.maps.googleMaps;
    }

    render1() 
    {
        let div = document.createElement("div");
        div.className = "d-flex justify-content-center my-3 text-center";
        document.querySelector(this.parent).append(div);
        document.querySelector(this.parent).className = "row row-cols-lg-3 row-cols-md-2 justify-content-around"
        div.innerHTML += 
        `<div data-aos="fade-up" data-aos-duration="2000" class="card preBox h-100">
            <img src="${this.flag}" class="rounded" width="100%">
        </div>`;
        div.querySelector(".preBox").addEventListener("click", () => 
        {
          document.querySelector(this.parent).innerHTML = "";
          this.render2();
        });
    }

    render2() 
    {
        let div = document.createElement("div");
        div.className = "col-md-8 mx-auto p-4 border rounded";
        div.style = "background: rgba(255, 255, 255, 0.6);}"
        document.querySelector(this.parent).append(div);
        
        div.innerHTML = 
        `<img src="${this.flag}" alt="${this.name}" class="w-50 float-end ms-4 rounded">
        <h2>${this.name}</h2>
        <div><strong>POP: </strong>${this.pop} </div>
        <div><strong>Region: </strong>${this.region}</div>
        <div><strong>Languages: </strong>${this.languages}</div>
        <div><strong>Coin: </strong> ${this.coin}, ${this.coinDescription}</div>
        <div><strong>Capital:</strong> ${this.capital}</div>
        <div class="mt-3" id="id_borders" ><strong>States with borders:</strong><br></div>
        <iframe class="mt-4 col-12 rounded" height="400" src="https://maps.google.com/maps?q=${this.lat},${this.lon}&hl=es&z=7&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" ></iframe>
        `;
    
        if (this.borders != null) 
        {
           this.borders.forEach(async (item, i) => 
            {
                let name = await codeToName(item);
                let span = document.createElement("span");
                // let id = `#id_borders_${this.name}`;
                document.querySelector("#id_borders").append(span);
                span.className = "text-primary"
                if(i != (this.borders.length -1))
                    span.innerHTML = `${name}, `;
                else
                    span.innerHTML = `${name}.`;
                span.addEventListener("click", () => 
                {
                    showCountry(name);
                });
            });
    
        } 
        else 
        { 
            document.querySelector("#id_borders").innerHTML += "none" 
        }
    
        
    }
}