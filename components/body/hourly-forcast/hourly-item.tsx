import { getIcon } from "@/components/getIcon"
import { Thermometer, Droplets } from "lucide-react"

export default function HourlyItem(props: { time: string, tempreture: number, wCode: number, humidity: number, isDay: boolean }) {


    return (
        <section className="group w-full h-full max-h-[200px] sm:max-h-screen flex flex-col sm:flex-row items-center justify-between border-2 border-gray-500 hover:bg-teal-600 hover:text-white hover:border-none rounded-full sm:rounded-xl px-4 hover:scale-105 transition-transform duration-200">

            <div className="flex-1 h-full flex flex-col justify-around sm:justify-center sm:gap-6">
                <span className="text-[14px] sm:text-2xl font-semibold sm:font-light text-center sm:text-left">{props.time}</span>
                <div className="w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] sm:hidden">
                    {getIcon(props.wCode, 52, props.isDay)}
                </div>
                <div className="flex flex-col items-center justify-center sm:items-start gap-2">
                    <span className="text-[22px] font-semibold sm:font-normal sm:text-[16px] flex items-center gap-1">
                        <Thermometer size={20} className="hidden sm:block text-teal-600 group-hover:text-white"></Thermometer>
                        {props.tempreture}°
                    </span>
                    <span className="hidden sm:flex items-center gap-1">
                        <Droplets size={20} className="text-teal-600 group-hover:text-white"></Droplets>
                        {props.humidity}
                    </span>
                </div>
            </div>

            <div className="flex-1 h-full hidden sm:flex items-center justify-end pb-4">
                <div className="w-[84px] h-[84px] sm:w-[100px] sm:h-[100px]">
                    {getIcon(props.wCode, 52, props.isDay)}
                </div>
            </div>

        </section>
    )
}
