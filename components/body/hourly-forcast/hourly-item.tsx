import { getIcon } from "@/components/getIcon"
import { Thermometer, Droplets } from "lucide-react"

export default function HourlyItem(props: { time: string, tempreture: number, wCode: number, humidity: number }) {
    return (
        <section className="w-full h-full flex items-center justify-between border-2 border-gray-500 hover:border-purple-400 rounded-xl px-4">

            <div className="flex-1 h-full flex flex-col items- justify-center gap-6">
                <span className="text-2xl font-light">{props.time}</span>
                <div className="flex flex-col gap-2">
                    <span className="flex items-center gap-1">
                        <Thermometer size={20} className="text-purple-400"></Thermometer>
                        {props.tempreture}
                    </span>
                    <span className="flex items-center gap-1">
                        <Droplets size={20} className="text-purple-400"></Droplets>
                        {props.humidity}
                    </span>
                </div>
            </div>

            <div className="flex-1 h-full flex items-center justify-end pb-4">
                {getIcon(props.wCode)}
            </div>

        </section>
    )
}
