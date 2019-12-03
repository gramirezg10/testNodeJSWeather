const axios = require ('axios')

const getWeather= async(lat, lon) => {
 
    const appId = 'd24721c0be5830ff4f09ba478fe17f11'
    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lon=${lon}&lat=${lat}&appid=${appId}&units=metric`
    });

    const res = await instance.get()
    return res.data.main.temp
}

module.exports = {
    getWeather
}