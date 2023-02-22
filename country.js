class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
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
    }
}

let usa = new Country("USA", "English", "Hello world", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo", ["red", "white", "green"]);
let gabon = new Country("Gabon", "French", "Salut tout le monde", ["green", "yellow", "blue"]);
let malawi = new Country("Malawi", "English", "Hello world", ["black", "red", "green"]);
let egypt = new Country("Egypt", "Egyptian Colloquial Arabic", "مرحبا بالعالم", ["red", "black", "white"]);
let bahamas = new Country("Bahamas", "Bahamian Creole", "Bonjou mond nan", ["aquamarine", "black", "yellow"]);
let algeria = new Country("Algeria", "Arabic and Berber", "مرحبا بالعالم", ["blue", "yellow", "red"])


function SwitchCountry() {
    let input = document.getElementById("CountryList").value; //grabs user input
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
