const place = require ('./place/place')
const weather = require ('./weather/weather')
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv

// console.log(argv.direccion)
// place.getPlaceLatLon(argv.direccion)
//     .then(console.log)

// weather.getWeather(40.750000,-74.000000)
//     .then(console.log)
//     .catch(console.log)

const getInfo = async (direccion) => {
    try {
        const coords = await place.getPlaceLatLon(direccion)
        const temp = await weather.getWeather(coords.lat, coords.lon)
        return `El clima de ${direccion} es de ${temp}.`
    } catch (e) {
        return `No se pudo obtener la temperatura de ${direccion}`
    }
}

getInfo(argv.direccion)
.then(console.log)
.catch(console.log)