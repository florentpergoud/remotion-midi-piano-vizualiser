const fetch = require('node-fetch');
const fs = require('fs');

const citiesCoordinates = [
    {
        name: 'Paris',
        lat: 48.8534,
        lon: 2.3488,
    },
];

(async () => {
    try {
        const rawSecrets = await fs.readFileSync('./secrets.json');
        const apiKey = JSON.parse(rawSecrets).REACT_APP_OPEN_WEATHER_API_KEY;
        const requests = citiesCoordinates.map((city) => {
            const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lon}&exclude=hourly,current,minutely,alerts&units=metric&appid=${apiKey}`;
            return fetch(apiUrl);
        });

        Promise.all(requests).then((responses) => {
            Promise.all(
                responses.map(async (rawData, index) => {
                    const jsonData = await rawData.json();
                    return { cityName: citiesCoordinates[index].name, data: await jsonData };
                }),
            ).then((data) => {
                fs.writeFileSync('./src/rawData.json', JSON.stringify(data), null, 4);
            });
        });
    } catch (error) {
        console.log(error);
    }
})();
