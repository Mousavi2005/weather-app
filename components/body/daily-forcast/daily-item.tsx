type DailyItemProp = {
    lowTemp: number,
    highTemp: number
}

export default function DailyItem({ lowTemp, highTemp }: DailyItemProp) {

    return (
        <div className="w-16 h-32 flex flex-col bg-red-300">
            <span></span>
            {/* <img src="" alt="" /> */}
            <div className="w-full flex items-center justify-between">
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
