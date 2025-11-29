import axios from "axios"

type Location = {
    latitude: number,
    longitude: number
}


async function getWeather(location: Location = { latitude: 40, longitude: 25 }) {
    const res = await axios({
        method: 'get',
        baseURL: "https://api.open-meteo.com/v1/forecast",
        params: {
            latitude: location.latitude,
            longitude: location.longitude,
            current: "temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,is_day,wind_speed_10m,weather_code",
            hourly: "temperature_2m,weather_code,relative_humidity_2m",
            daily: "temperature_2m_max,temperature_2m_min,weather_code"

        }
    })
    return res.data
}

export default getWeather
