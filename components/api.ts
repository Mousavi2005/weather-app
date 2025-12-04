import axios from "axios"

async function getWeather(location = { latitude: 35.6892, longitude: 51.3890 }) {

    const res = await axios({
        method: "get",
        baseURL: "https://api.open-meteo.com/v1/forecast",
        params: {
            latitude: location.latitude,
            longitude: location.longitude,
            current: "temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,is_day,wind_speed_10m,weather_code",
            hourly: "temperature_2m,weather_code,relative_humidity_2m,is_day",
            daily: "temperature_2m_max,temperature_2m_min,weather_code",
            timezone: "auto"
        },
    });

    const data = res.data;
    const localNowString = new Date().toLocaleString("en-US", { timeZone: data.timezone });
    const localNow = new Date(localNowString);

    const hourlyFuture = data.hourly.time
        .map((t, i) => ({
            time: t,
            temperature: data.hourly.temperature_2m[i],
            weather_code: data.hourly.weather_code[i],
            humidity: data.hourly.relative_humidity_2m[i],
            is_day: data.hourly.is_day[i],
        }))
        .filter(h => new Date(h.time) >= localNow); // compare using local time

    return {
        ...data,
        hourly_future: hourlyFuture,
    };
}

export default getWeather;
