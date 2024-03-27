// Displaying all the country flags in the console

var xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all", true);

xhr.onload = function () {
    // on load
    var countries = JSON.parse(xhr.responseText);
    for(var i = 0; i < countries.length; i++) {
        console.log(countries[i].name.common + ": " + countries[i].flag);
    }
};
xhr.send();


