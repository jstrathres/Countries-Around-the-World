class Country {
    constructor(name, lang, greeting, colors, flag) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
        this.flag = flag;
    }

    DisplayColors(){
        //Where all of the dom changes happen(color, text, etc)
        // this.name-- this.colors-- this.lang-- this.greeting---to access property
        
        document.getElementById("Color1").style.background = this.colors[0];
        document.getElementById("Color2").style.background = this.colors[1];
        document.getElementById("Color3").style.background = this.colors[2];
        document.getElementById("CountryName").innerText = this.name;
        document.getElementById("OfficialLanguage").innerText = this.lang;
        document.getElementById("HelloWorld").innerText = this.greeting;  
        document.getElementById("flag").src = this.flag;  
         
        // OR
        // document.querySelector("#CountryName").innerText = this.name;
    }
}

let usa = new Country("USA", "English", "Hello world", ["red", "white", "blue"], "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.sIzORzyqldD-DfEjaemqaAHaD5%26pid%3DApi&f=1&ipt=5d6e56ab989042f30cb3cc75fbc310d02bc27fe6cd0d4e1b374b0aa11aa93afb&ipo=images");
let mexico = new Country("Mexico", "Spanish", "Hola mundo", ["red", "white", "green"], "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.CLe-MdmusdSK-s6KEhH4owHaEO%26pid%3DApi&f=1&ipt=41cb0d3fefb4848ddbc8721d7bc33ea7031c18dbec8c000e8e20c68007306e93&ipo=images");
let gabon = new Country("Gabon", "French", "Salut tout le monde", ["green", "yellow", "blue"], "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.evYUgr3Cr4CyfEmh8heLmQHaFj%26pid%3DApi&f=1&ipt=1ff8b37cd1ebd0311882b39b138d8b9460bacf07a1b064fe6ed3fa8acd45c10c&ipo=images");
let malawi = new Country("Malawi", "English", "Hello world", ["black", "red", "green"], "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.WLuaDOQnYWN8tjP-c0hrBQHaE7%26pid%3DApi&f=1&ipt=a5660a22bde3eea1def7077ddd65824b68435d29423f972383493688726d7ff6&ipo=images");
let egypt = new Country("Egypt", "Egyptian Colloquial Arabic", "مرحبا بالعالم", ["red", "black", "white"], "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4ve4zACsz1LZOlMcCUHGBAHaE8%26pid%3DApi&f=1&ipt=e3dedeee7cc8c8d055a291e38847f2134435cd81d3eb7fbe59fddf6261b8721d&ipo=images");
let bahamas = new Country("Bahamas", "Bahamian Creole", "Bonjou mond nan", ["aquamarine", "black", "yellow"], "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.6grfC1GWc3ljqm1xHMNgswHaDt%26pid%3DApi&f=1&ipt=6321244a1e91ae5b12095a876ca80d11e2b4df020725f5bec4e814822919c309&ipo=images");
let algeria = new Country("Algeria", "Arabic and Berber", "مرحبا بالعالم", ["blue", "yellow", "red"], "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.aV_h5zaBxVVPPnm78Flj9AHaE8%26pid%3DApi&f=1&ipt=dec62e3ba12fa6d8e104a9b055ea4dd2a76f1df3e91e36d12ff94473e12a27b2&ipo=images")


function SwitchCountry() {
    let input = document.getElementById("CountryList").value; //grabs user input
    
    //OR
    // let input = document.querySelector("#CountryList").value;

    let country;

    if (input === "USA") {       
        country = usa;
    }
    else if (input === "Mexico") {
        country = mexico;
    }
    else if (input === "Gabon") {
        country = gabon;
    }
    else if (input === "Malawi") {
        country = malawi;
    }
    else if (input === "Egypt") {
        country = egypt;
    }
    else if (input === "Bahamas") {
        country = bahamas;
    }
    else if (input === "Algeria") {
        country = algeria;
    }

    //call 
    country.DisplayColors();
}