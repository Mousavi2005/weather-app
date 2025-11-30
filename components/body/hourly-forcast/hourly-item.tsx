import { getIcon } from "@/components/getIcon"
import { Thermometer, Droplets } from "lucide-react"

export default function HourlyItem(props: { time: string, tempreture: number, wCode: number, humidity: number, isDay: boolean }) {


    return (
        <section className="group w-full h-full flex items-center justify-between border-2 border-gray-500 hover:bg-teal-600 hover:text-white hover:border-none rounded-xl px-4 hover:scale-105 transition-transform duration-200">

            <div className="flex-1 h-full flex flex-col items- justify-center gap-6">
                <span className="text-2xl font-light">{props.time}</span>
                <div className="flex flex-col gap-2">
                    <span className="flex items-center gap-1">
                        <Thermometer size={20} className="text-teal-600 group-hover:text-white"></Thermometer>
                        {props.tempreture}
                    </span>
                    <span className="flex items-center gap-1">
                        <Droplets size={20} className="text-teal-600 group-hover:text-white"></Droplets>
                        {props.humidity}
                    </span>
                </div>
            </div>

            <div className="flex-1 h-full flex items-center justify-end pb-4">
                <div className="w-[100px] h-[100px]">
                    {getIcon(props.wCode, 52, props.isDay)}
                </div>
                {/* {getIcon(props.wCode)} */}
            </div>

        </section>
    )
}
