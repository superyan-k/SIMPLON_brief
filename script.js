const APIKEY            = "03672715ae6d9de4e91ce446851332ca";
const CITY_PICK         = "Niort";      // <-- à définir dans un fichier JSON externe
const UNITS             = "metric";     // <-- à définir dans un fichier JSON externe
const LANG              = "fr";         // <-- à définir dans un fichier JSON externe
const TIMING_REFRESH    = 30000;        // <-- à définir dans un fichier JSON externe

// Check API pour extraire les infos selon la ville renseigné
function call_api_city(city) {
    var _url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=${UNITS}&lang=${LANG}`;

    // Refresh toutes les heures
    setTimeout(() => {
        call_api_city(CITY_PICK)
    }, TIMING_REFRESH);

    // Extrait les données de l'API
    fetch(_url)
        .then(( response) => 
            response.json()
        .then((data) => {
            console.log(data);
            document.querySelector("#city").innerHTML = data.name;
            document.querySelector("#temp").innerHTML = data.main.temp;
            document.querySelector("#humi").innerHTML = data.main.humidity;
            document.querySelector("#wind").innerHTML = data.wind.speed;
            console.log("data récupéré avec succés !");
        })
        );
}

// Initialisation au lancement de la page
call_api_city(CITY_PICK);