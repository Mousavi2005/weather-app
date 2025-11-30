"use client"

import { useQuery } from "@tanstack/react-query"
import HourlyItem from "./hourly-forcast/hourly-item";
import DailyItem from "./daily-forcast/daily-item";
// import DailyList from "./daily-forcast/daily-list";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { setActiveTime } from "@/store/timeSlice";
import { setActiveDegree } from "@/store/degreeSlice";

export default function Body() {
    const dispatch = useDispatch()
    const weather = useSelector((state: RootState) => state.weather.weather)
    const hourlyTempreture = weather?.hourly?.temperature_2m.slice(0, 10)
    let hourlyTime = weather?.hourly?.time.slice(0, 10)
    const hourlyWCode = weather?.hourly?.weather_code.slice(0, 10)
    const hourlyHumidity = weather?.hourly?.relative_humidity_2m.slice(0, 10)
    const hourlyIsDay = weather?.hourly?.is_day.slice(0, 10)
    console.log(hourlyIsDay);

    const dailyMaxTemp = weather?.daily?.temperature_2m_max
    const dailtMinTem = weather?.daily?.temperature_2m_min
    const dailyWCode = weather?.daily?.weather_code
    let dailyTime = weather?.daily?.time
    dailyTime = dailyTime?.map((t: string) => getWeekdayName(t))

    const activeTime = useSelector((state: RootState) => state.time.activeTime)
    const activeDegree = useSelector((state: RootState) => state.degree.degree)

    const format = (t: string) => new Date(t).toLocaleTimeString([], { hour: "numeric", hour12: true });
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
    hourlyTime = hourlyTime?.map((t: string) => format(t))

    // console.log(weather);


    return (
        <section className="w-[85%] h-full flex flex-col">

            <div className="w-full flex items-center justify-between mt-4">
                <div className="flex gap-4 items-end justify-between">
                    <button
                        onClick={() => { dispatch(setActiveTime('Today')) }}
                        className={`
                        ${activeTime === 'Today' ? "text-teal-600 text-2xl" : "text-[hsl(0,0%,55%)] text-xl"}
                        font-medium hover:cursor-pointer`}>Today</button>
                    <button
                        onClick={() => { dispatch(setActiveTime('Week')) }}
                        className={`
                        ${activeTime === 'Week' ? "text-teal-600 text-2xl" : "text-[hsl(0,0%,55%)] text-xl"}
                        font-medium hover:cursor-pointer`}>Week</button>
                </div>

                <div className="flex gap-4">
                    <button
                        onClick={() => { dispatch(setActiveDegree('C')) }}
                        className={`${activeDegree === 'C' ? "bg-teal-600" : "bg-[hsl(0,0%,55%)]"} flex items-center justify-center w-8 h-8 rounded-full hover:cursor-pointer`}>°C</button>
                    <button
                        onClick={() => { dispatch(setActiveDegree('F')) }}
                        className={`${activeDegree === 'F' ? "bg-teal-600" : "bg-[hsl(0,0%,55%)]"} flex items-center justify-center w-8 h-8 rounded-full hover:cursor-pointer`}>°F</button>
                </div>
            </div>

            {activeTime === 'Today' ?
                <div className="w-full h-full grid grid-cols-5 grid-rows-2 gap-5 py-4">
                    {hourlyTempreture?.map((t: number, index: number) => {
                        return <HourlyItem time={hourlyTime[index]} tempreture={t} wCode={hourlyWCode[index]} humidity={hourlyHumidity[index]} isDay={hourlyIsDay[index]}></HourlyItem>
                    })}
                </div>
                :
                <div className="w-full h-full grid grid-cols-7 grid-rows-1 items-center gap-8">
                    {dailyTime?.map((t: string, index: number) => {
                        return <DailyItem dayName={t} wCode={dailyWCode[index]} lowTemp={dailtMinTem[index]} highTemp={dailyMaxTemp[index]}></DailyItem>
                    })}
                </div>
            }





        </section>
    );
}
