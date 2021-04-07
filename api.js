const fetch = require('node-fetch');

const apiKey = '0b91a14a2d086771210387dd3580152a';

const citiesCoordinates = [
    {
        name: 'paris',
        lat: 48.8534,
        lon: 2.3488,
    },
];

(async () => {
    citiesCoordinates.forEach((city) => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lon}&exclude=hourly,current,minutely,alerts&units=metric&appid=${apiKey}`;
        fetch(apiUrl)
            .then((rawData) => {
                return rawData.json();
            })
            .then((data) => console.log('data', JSON.stringify({ cityName: city.name, data }, null, 2)));
    });
})();
