export default function HourlyItem(props: {time: string, tempreture: number}) {
    return (
        <section className="w-full h-12 flex items-center justify-between bg-[hsl(243,23%,30%)] rounded-xl px-4">
            <div className="w-[30%] h-full flex items-center justify-between">
                {/* <img src="" alt="" /> */}
                <span>{props.time}</span>
            </div>
            <div className="w-[10%] h-full flex items-center justify-end">
                <span>{props.tempreture}</span>
            </div>
        </section>
    )
}
