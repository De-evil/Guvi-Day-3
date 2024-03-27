// Countires names, region, sub-region and population

var xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all", true);

xhr.onload = function () {
    //on load
    var countries = JSON.parse(xhr.responseText);
    for(var i = 0; i < countries.length; i++) {
        console.log(countries[i].name.common );
        console.log("Population :", countries[i].population);
        console.log("Region :", countries[i].region);
        console.log("SubRegion :", countries[i].subregion);
    }
};
xhr.send();


