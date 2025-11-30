import { getIcon } from "@/components/getIcon"

export default function DailyItem(props: { dayName: string, wCode: number, lowTemp: number, highTemp: number }) {

    return (
        <section className="w-full h-[80%] py-8 flex flex-col items-center justify-around border-2 border-gray-500 rounded-full hover:bg-teal-600 hover:text-white hover:border-0 hover:scale-105 transition-transform duration-200">
            <span className="text-3xl">{props.dayName}</span>
            <div className="w-[100px] h-[100px]">
                {getIcon(props.wCode, 52,)}
            </div>
            <div className="w-full flex items-center justify-center gap-6">
                <div className="flex flex-col items-center">
                    <span>Low</span>
                    <span className="text-[20px]">{props.lowTemp}°</span>
                </div>
                <div className="flex flex-col items-center">
                    <span>High</span>
                    <span className="text-[20px]">{props.highTemp}°</span>
                </div>
                {/* <span className="text-[18px]">{props.lowTemp}°</span> */}
                {/* <span className="text-[18px]">{props.highTemp}°</span> */}
            </div>
        </section>
    )
}
