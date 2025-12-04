"use client"

import { useSelector, UseSelector } from "react-redux"
import type { RootState } from "@/store/store"

import { ArrowUp } from "lucide-react"
import { ArrowDown } from "lucide-react"
import { Droplets } from "lucide-react"
import { Wind } from "lucide-react"
import { Moon } from "lucide-react"
import { Sun } from "lucide-react"

export default function DataList() {

    const weather = useSelector((state: RootState) => state.weather.weather)
    console.log(weather);

    return (
        <section className="h-full flex flex-col items-center justify-between">
            {weather?.current?.is_day === 0 ?
                <Moon className="w-[84px] h-[84px] sm:w-[90%] sm:h-[90%] max-w-[100px] max-h-[100px]" />
                :
                <Sun className="w-[84px] h-[84px] sm:w-[90%] sm:h-[90%] max-w-[100px] max-h-[100px]" />

            }
            <div className="w-[120px] h-[60%] flex flex-col items-center justify-end pt-1">
                <div id="today low" className="w-[50%] h-[25%] flex items-center justify-between gap-[5%]">
                    <ArrowUp className="h-full" />   {/* fills parent height */}
                    <span>{weather?.daily?.temperature_2m_max[0]}</span>
                </div>

                <div id="today low" className="w-[50%] h-[25%] flex items-center justify-between gap-[5%]">
                    <ArrowDown className="h-full"></ArrowDown>
                    <span>{weather?.daily?.temperature_2m_min[0]}</span>
                </div>
                <div id="wind" className="w-[50%] h-[25%] flex items-center justify-between gap-[5%]">
                    <Wind className="h-full"></Wind>
                    <span>{weather?.current?.wind_speed_10m}</span>
                </div>
                <div id="humidity" className="w-[50%] h-[25%] flex items-center justify-between gap-[5%]">
                    <Droplets className="h-full"></Droplets>
                    <span>{weather?.current?.relative_humidity_2m}</span>
                </div>
            </div>
        </section>
    )
}
