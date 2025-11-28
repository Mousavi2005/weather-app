"use client"

import { useQuery } from "@tanstack/react-query"
import HourlyList from "./hourly-forcast/hourly-list";
import DailyList from "./daily-forcast/daily-list";
import getWeather from "../api";
import { useDispatch } from "react-redux";
import { setWeather } from "@/store/weatherSlice";
import { useEffect } from "react";

export default function Body() {
    const dispathc = useDispatch()
    const weather = useQuery({
        queryKey: ["getWeather"],
        queryFn: () => getWeather()
    })

    useEffect(()=>{
        dispathc(setWeather(weather))
    },[weather])


    return (
        <div className="w-full h-[72%] flex items-center justify-between">
            <div id="left" className="flex-2">
                <DailyList dailyDatas={[1, 1, 1, 1, 1, 1, 1]}></DailyList>
            </div>

            <div id="right" className="flex-1 h-full">
                <HourlyList />
            </div>
        </div>
    );
}
