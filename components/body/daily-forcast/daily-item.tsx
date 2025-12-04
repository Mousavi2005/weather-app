import { getIcon } from "@/components/getIcon"
import { useWindowWidth } from "@/hooks/useWindowWidth"

export default function DailyItem(props: { dayName: string, wCode: number, lowTemp: number, highTemp: number }) {

    return (
        <section className="w-full max-w-[120px] max-h-[250px] sm:max-h-[340px] h-full py-[20%] flex flex-col items-center justify-between border-2 border-gray-500 rounded-full hover:bg-teal-600 hover:text-white hover:border-0 hover:scale-105 transition-transform duration-200">
            <span className="text-[14px] sm:text-2xl">{props.dayName}</span>
            <div className="w-10 h-10 sm:w-[50px] sm:h-[50px] md:w-[65px] md:h-[65px]">
                {getIcon(props.wCode, 52,)}
            </div>

            <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-3">
                <span className="xl:hidden text-[14px] sm:text-2xl">{Math.floor((props.lowTemp + props.highTemp) / 2)}°</span>
                <div className="hidden xl:flex flex-col items-center">
                    <span>Low</span>
                    <span className="text-[20px]">{props.lowTemp}°</span>
                </div>
                <div className="hidden xl:flex flex-col items-center">
                    <span>High</span>
                    <span className="text-[20px]">{props.highTemp}°</span>
                </div>
            </div>
        </section>
    )
}
