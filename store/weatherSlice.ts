import { createSlice } from "@reduxjs/toolkit";

// export type WeatherData = {
//     current: {
//         apparent_temperature: number;
//         interval: number;
//         is_day: number;
//         precipitation: number;
//         relative_humidity_2m: number;
//         temperature_2m: number;
//         time: string;
//     };
//     current_units: {
//         apparent_temperature: string;
//         interval: string;
//         is_day: string;
//         precipitation: string;
//         relative_humidity_2m: string;
//         temperature_2m: string;
//         time: string;
//     };
//     daily: {
//         temperature_2m_max: number[];
//         temperature_2m_min: number[];
//         time: string[];
//     };
//     daily_units: {
//         temperature_2m_max: string;
//         temperature_2m_min: string;
//         time: string;
//     };
//     elevation: number;
//     generationtime_ms: number;
//     hourly: {
//         temperature_2m: number[];
//         time: string[];
//     };
//     hourly_units: {
//         temperature_2m: string;
//         time: string;
//     };
//     latitude: number;
//     longitude: number;
//     timezone: string;
//     timezone_abbreviation: string;
//     utc_offset_seconds: number;
// };

// type WeatherState = {
//     weather: WeatherData | null;
// };


const initialState = {
    weather: {}
};


const weatherSlice = createSlice({
    name: "weather slice",
    initialState,
    reducers: {
        setWeather: (state, action) => { state.weather = action.payload }
    }
})

export const { setWeather } = weatherSlice.actions
export default weatherSlice.reducer
