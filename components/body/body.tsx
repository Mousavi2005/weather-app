import HourlyList from "./hourly-forcast/hourly-list"


export default function Body() {
    return (
        <div className="w-full h-[72%] flex items-center justify-between">
            <div id="left" className="flex-2"></div>

            <div id="right" className="flex-1 h-full">
                <HourlyList></HourlyList>
            </div>

        </div>
    )
}
