const axios = require ('axios')

const getPlaceLatLon= async(direccion) => {

    const encodeUrl = encodeURI(direccion)
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {'x-rapidapi-key': 'beae545a5amsh58f8c87fea0c120p158d48jsnf6a933144565'},
        // params:{ location: argv.direccion}
    });
    const res = await instance.get()
    if (res.data.Results.length === 0) throw new Error(`No hay resultados para ${direccion}`);

    const data = res.data.Results[0]
    const dir = data.name
    const lat = data.lat
    const lon = data.lon

    return {
        dir,
        lat,
        lon
    }
}

module.exports = {
    getPlaceLatLon
}