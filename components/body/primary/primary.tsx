import DataList from "./data-list";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

export default function Primary() {
    const weather = useSelector((state: RootState) => state.weather.weather)
    const cityName = useSelector((state: RootState) => state.place.currentCity)
    return (
        <section className="w-[85%] h-[35%] text-gray-100 flex items-center justify-between px-20 py-5 bg-[url('/images/background.jpg')] bg-cover bg-center bg-no-repeat rounded-xl">
            <div className="w-[20%] h-full flex flex-col items-start justify-between pb-6">
                <span className=" text-3xl font-semibold">{cityName.toUpperCase()}</span>
                <span className="text-5xl font-bold">{weather?.current?.temperature_2m}°</span>
            </div>
            <DataList></DataList>
        </section>
    )
}
