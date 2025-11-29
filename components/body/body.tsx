"use client"

import { useQuery } from "@tanstack/react-query"
import HourlyItem from "./hourly-forcast/hourly-item";
import DailyList from "./daily-forcast/daily-list";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import type { RootState } from "@/store/store";

export default function Body() {
    const weather = useSelector((state: RootState) => state.weather.weather)
    const hourlyTempreture = weather?.hourly?.temperature_2m.slice(0, 10)
    let hourlyTime = weather?.hourly?.time.slice(0, 10)
    const hourlyWCode = weather?.hourly?.weather_code.slice(0, 10)
    const hourlyHumidity = weather?.hourly?.relative_humidity_2m.slice(0, 10)

    const format = (t: string) => new Date(t).toLocaleTimeString([], { hour: "numeric", hour12: true });
    hourlyTime = hourlyTime?.map((t: string) => format(t))

    console.log('weather code: ', hourlyWCode);


    return (
        <section className="w-[85%] h-full flex flex-col">

            <div className="w-full flex items-center justify-between">
                <div className="flex gap-4">
                    <button className="text-2xl font-medium">Today</button>
                    <button className="text-2xl font-medium">Week</button>
                </div>

                <div className="flex gap-4">
                    <button>°C</button>
                    <button>°F</button>
                </div>
            </div>

            <div className="w-full h-full grid grid-cols-5 grid-rows-2 gap-5 py-4">
                {hourlyTempreture?.map((t: number, index: number) => {
                    return <HourlyItem time={hourlyTime[index]} tempreture={t} wCode={hourlyWCode[index]} humidity={hourlyHumidity[index]}></HourlyItem>
                })}
            </div>

        </section>
    );
}
