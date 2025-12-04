"use client"

import { useQuery } from "@tanstack/react-query"
import HourlyItem from "./hourly-forcast/hourly-item";
import DailyItem from "./daily-forcast/daily-item";
// import DailyList from "./daily-forcast/daily-list";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { setActiveTime } from "@/store/timeSlice";
import { setActiveDegree } from "@/store/degreeSlice";
import { useEffect } from "react";
import { useWindowWidth } from "@/hooks/useWindowWidth";

export default function Body() {
    const width = useWindowWidth()
    let maxItems
    if (width) {
        if (width >= 1280) maxItems = 10
        else if (width >= 1024) maxItems = 8
        else if (width >= 768) maxItems = 6
        else if (width >= 640) maxItems = 4
        else if (width < 640) maxItems = 7
    }

    const format = (t: string) =>
        new Date(t).toLocaleTimeString("en-US", {
            hour: "numeric",
            hour12: true,
            timeZone: weather?.timezone ?? "UTC"
        })

    const dispatch = useDispatch()
    const weather = useSelector((state: RootState) => state.weather.weather)

    const hourly = weather?.hourly_future ?? [];
    const hourlyTemperature = hourly.map(h => h.temperature).slice(0, 10);
    const hourlyTime = hourly.map(h => format(h.time)).slice(0, 10);
    const hourlyWCode = hourly.map(h => h.weather_code).slice(0, 10);
    const hourlyHumidity = hourly.map(h => h.humidity).slice(0, 10);
    const hourlyIsDay = hourly.map(h => h.is_day).slice(0, 10);

    const dailyMaxTemp = weather?.daily?.temperature_2m_max
    const dailtMinTem = weather?.daily?.temperature_2m_min
    const dailyWCode = weather?.daily?.weather_code
    const dailyTime = weather?.daily?.time.map(h => getWeekdayName(h))

    const activeTime = useSelector((state: RootState) => state.time.activeTime)
    const activeDegree = useSelector((state: RootState) => state.degree.degree)

    function getWeekdayName(dateString: string): string {
        const date = new Date(dateString);
        const weekdays = [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
        ];

        return weekdays[date.getDay()];
    }

    return (
        <section className="w-full h-[45%] sm:h-[50%] bg-[hsl(0,0%,10%)]/85 rounded-t-[50px] sm:rounded-t-none sm:w-[85%] flex flex-col">

            <div className="flex w-full h-16 items-center justify-between py-4 px-6">
                <div className="w-full sm:w-fit flex gap-4 items-end justify-between">
                    <button
                        onClick={() => { dispatch(setActiveTime('Today')) }}
                        className={`
                        ${activeTime === 'Today' ? "text-teal-600 text-xl sm:text-2xl" : "text-[hsl(0,0%,55%)] sm:text-xl"}
                        font-medium hover:cursor-pointer`}>{width <= 640 ? "Hourly Forecast" : "Today"}</button>
                    <button
                        onClick={() => { dispatch(setActiveTime('Week')) }}
                        className={`
                        ${activeTime === 'Week' ? "text-teal-600 text-xl sm:text-2xl" : "text-[hsl(0,0%,55%)] sm:text-xl"}
                        font-medium hover:cursor-pointer`}>{width <= 640 ? "Daily Forecast" : "Week"}</button>
                </div>

                <div className="hidden sm:flex gap-4">
                    <button
                        onClick={() => { dispatch(setActiveDegree('C')) }}
                        className={`${activeDegree === 'C' ? "bg-teal-600" : "bg-[hsl(0,0%,55%)]"} flex items-center justify-center w-8 h-8 rounded-full hover:cursor-pointer`}>°C</button>
                    <button
                        onClick={() => { dispatch(setActiveDegree('F')) }}
                        className={`${activeDegree === 'F' ? "bg-teal-600" : "bg-[hsl(0,0%,55%)]"} flex items-center justify-center w-8 h-8 rounded-full hover:cursor-pointer`}>°F</button>
                </div>
            </div>

            <hr className="sm:hidden"></hr>

            {activeTime === 'Today' ?
                <div className="px-1 py-2 sm:px-6 w-full h-[calc(100%-70px)] grid auto-rows-fr auto-cols-fr items-center grid-cols-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 sm:gap-5">
                    {hourlyTemperature?.slice(0, maxItems).map((t: number, index: number) => {
                        return <HourlyItem key={index} time={hourlyTime[index]} tempreture={t} wCode={hourlyWCode[index]} humidity={hourlyHumidity[index]} isDay={hourlyIsDay[index]}></HourlyItem>
                    })}
                </div>
                :
                <div className="px-1 py-2 sm:px-6 w-full h-full grid grid-cols-7 grid-rows-1 items-center gap-2 xl:gap-8">
                    {dailyTime?.map((t: string, index: number) => {
                        return <DailyItem key={index} dayName={t} wCode={dailyWCode[index]} lowTemp={dailtMinTem[index]} highTemp={dailyMaxTemp[index]}></DailyItem>
                    })}
                </div>
            }


        </section>
    );
}
