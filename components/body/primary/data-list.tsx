"use client"

import { useSelector, UseSelector } from "react-redux"
import type { RootState } from "@/store/store"

import { ArrowUp } from "lucide-react"
import { ArrowDown } from "lucide-react"
import { Droplets } from "lucide-react"
import { Wind } from "lucide-react"
import { Moon } from "lucide-react"
import { Sun } from "lucide-react"

// type DataItemProp = {
//     title: string,
//     value: number
// }

export default function DataList() {

    const weather = useSelector((state: RootState) => state.weather.weather)
    console.log(weather);

    return (
        <section className="h-full flex flex-col items-center justify-between pb-6">
            {weather?.current?.is_day === 0 ?
                <Moon className="sm:w-[90px] sm:h-[90px] w-[70px] h-[70px]" />
                // <Moon size={90} />
                :
                <Sun className="sm:w-[90px] sm:h-[90px] w-[70px] h-[70px]" />

                // <Sun size={90} />

            }
            <div className="w-[120px] h-[60%] flex flex-col items-center justify-end pt-1">
                <div id="today high" className="w-[50%] flex items-center justify-between gap-4">
                    <ArrowUp size={20}></ArrowUp>
                    <span>{weather?.daily?.temperature_2m_max[0]}</span>
                </div>
                <div id="today low" className="w-[50%] flex items-center justify-between gap-4">
                    <ArrowDown size={20}></ArrowDown>
                    <span>{weather?.daily?.temperature_2m_min[0]}</span>
                </div>
                <div id="wind" className="w-[50%] flex items-center justify-between gap-4">
                    <Wind size={20}></Wind>
                    <span>{weather?.current?.wind_speed_10m}</span>
                </div>
                <div id="humidity" className="w-[50%] flex items-center justify-between gap-4">
                    <Droplets size={20}></Droplets>
                    <span>{weather?.current?.relative_humidity_2m}</span>
                </div>
            </div>
        </section>
    )
}
