import { getIcon } from "@/components/getIcon"
import { useWindowWidth } from "@/hooks/useWindowWidth"

export default function DailyItem(props: { dayName: string, wCode: number, lowTemp: number, highTemp: number }) {
    const width = useWindowWidth()

    return (
        <section className="w-full h-full max-h-[200px] py-8 flex flex-col items-center justify-around border-2 border-gray-500 rounded-full hover:bg-teal-600 hover:text-white hover:border-0 hover:scale-105 transition-transform duration-200">
            <span className="text-[14px] sm:text-2xl">{props.dayName}</span>
            <div className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[65px] md:h-[65px]">
                {getIcon(props.wCode, 52,)}
            </div>

            <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-3">
                <span className="lg:hidden text-[14px] sm:text-2xl">{Math.floor((props.lowTemp + props.highTemp) / 2)}°</span>
                <div className="hidden lg:flex flex-col items-center">
                    <span>Low</span>
                    <span className="text-[20px]">{props.lowTemp}°</span>
                </div>
                <div className="hidden lg:flex flex-col items-center">
                    <span>High</span>
                    <span className="text-[20px]">{props.highTemp}°</span>
                </div>
            </div>
        </section>
    )
}
