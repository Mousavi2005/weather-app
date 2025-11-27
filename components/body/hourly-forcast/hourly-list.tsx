import HourlyDropDown from "./drop-dowm";
import HourlyItem from "./hourly-item";

const data = [
  { hour: "01:00", temperature: 12 },
  { hour: "04:00", temperature: 10 },
  { hour: "07:00", temperature: 14 },
  { hour: "10:00", temperature: 18 },
  { hour: "13:00", temperature: 21 },
  { hour: "16:00", temperature: 19 },
  { hour: "19:00", temperature: 15 }
];


export default function HourlyList() {

    return (
        <section className="w-full h-full bg-[hsl(243,27%,20%)]">

            <div className="w-full h-14 flex items-center justify-between px-4">
                <span>Hourly forecast</span>
                <HourlyDropDown></HourlyDropDown>
            </div>


            <div className="flex flex-col items-center gap-2 px-4">
                {data.map((d, index) => {
                    return <HourlyItem key={index} time={d.hour} tempreture={d.temperature}></HourlyItem>
                })}
            </div>

        </section>
    )
}
