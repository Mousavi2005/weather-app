import DailyItem from "./daily-item";

export default function DailyList({ dailyDatas }: { dailyDatas: any[] }) {

    return (
        <section className="w-full h-[30%] flex flex-col items-start justify-between">
            <span>Daily forecast</span>
            <div className="w-full flex items-center justify-between">
                {dailyDatas.map((d, index) => {
                    return <DailyItem key={index} lowTemp={4} highTemp={4}></DailyItem>
                })}
            </div>
        </section>
    )

}
