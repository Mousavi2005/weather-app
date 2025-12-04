import { getIcon } from "@/components/getIcon"
import { Thermometer, Droplets } from "lucide-react"

export default function HourlyItem(props: { time: string, tempreture: number, wCode: number, humidity: number, isDay: boolean }) {

    return (
        <section className="group overflow-hidden w-full h-full max-h-[250px] py-[1%] sm:max-h-screen flex flex-col sm:flex-row items-center justify-between border-2 border-gray-500 hover:bg-teal-600 hover:text-white hover:border-none rounded-full sm:rounded-xl px-4 hover:scale-105 transition-transform duration-200">

            <div className="flex-1 h-full flex flex-col justify-between sm:justify-center sm:gap-[10%]">
                <span className="text-[14px] sm:text-2xl font-semibold sm:font-light text-center sm:text-left">{props.time}</span>
                <div className="w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] sm:hidden">
                    {getIcon(props.wCode, 52, props.isDay)}
                </div>
                <div className="flex flex-col items-center justify-center sm:items-start">
                    <span className="h-[50%] text-[22px] font-semibold sm:font-normal sm:text-[16px] flex items-center gap-2">
                        <Thermometer className="h-[16px] w-[16px] hidden sm:block text-teal-600 group-hover:text-white"></Thermometer>
                        {props.tempreture}°
                    </span>
                    <span className="h-[50%] hidden sm:flex items-center gap-2">
                        <Droplets className="h-[16px] w-[16px] hidden sm:block text-teal-600 group-hover:text-white"></Droplets>
                        {props.humidity}
                    </span>
                </div>
            </div>

            {/* DESKTOP */}
            <div className="flex-1 h-full hidden sm:flex items-center justify-end">
                <div className="w-[84px] h-[84px] sm:w-[90%] sm:h-[90%] max-w-[90px] max-h-[90px] flex items-center justify-center">
                    {getIcon(props.wCode, 52, props.isDay)}
                </div>
            </div>

        </section>
    )
}
