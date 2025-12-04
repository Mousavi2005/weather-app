import DataList from "./data-list";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

export default function Primary() {
    const weather = useSelector((state: RootState) => state.weather.weather)
    const cityName = useSelector((state: RootState) => state.place.currentCity)
    return (
        <>
            {/* DESKTOP */}
            <section className="w-[85%] h-[35%] text-gray-100 hidden sm:flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-3 bg-[hsl(0,0%,10%)]/65 rounded-t-[50px]">
                <div className="w-[20%] h-full flex flex-col items-start justify-between">
                    <span className=" text-4xl font-semibold">{cityName.toUpperCase()}</span>
                    <span className="text-4xl font-bold">{weather?.current?.temperature_2m}°</span>
                </div>
                <DataList></DataList>
            </section>

            {/* MOBILE */}

            <section className="flex sm:hidden flex-col justify-between w-fit h-28 bg-[hsl(0,0%,10%)]/65 run devnpm5 rounded-[25px] py-2 px-4">
                <span className="text-4xl flex items-center justify-center">{cityName.toUpperCase()}</span>
                <span className="text-4xl flex items-center justify-center">{weather?.current?.temperature_2m}°</span>
            </section>
        </>

    )
}
