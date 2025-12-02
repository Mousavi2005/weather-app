"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { getLatLon } from "../serch"
import { useQueryClient } from "@tanstack/react-query"
import getWeather from "../api"
import { useDispatch } from "react-redux"
import { setCurrentCity } from "@/store/placeSlice"

export default function Input() {
    const queryClient = useQueryClient()
    const dispatch = useDispatch()
    const [place, setPlace] = useState("")

    async function handleSubmit() {
        if (!place) return;

        const location = await getLatLon(place);
        await queryClient.fetchQuery({
            queryKey: ["getWeather"],
            queryFn: () => getWeather(location)
        });
        dispatch(setCurrentCity(place))
        // setPlace("");
    }


    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
        }}
            className="h-8 flex gap-4 items-center justify-around" action="">
            <div className="h-full flex hover:gap-2 items-center bg-[hsl(0,0%,95%)] rounded-full px-1 group">
                <Search className="text-[hsl(0,0%,15%)]" />
                <input
                    value={place}
                    placeholder="Search for a place ..."
                    className="transition-all duration-300 w-0 group-hover:w-32 group-hover:md:w-56 focus:outline-0 text-[hsl(0,0%,15%)]"
                    onChange={(e) => setPlace(e.target.value)}
                />
            </div>

            {/* <button className="w-22 h-8 hidden md:block bg-teal-600 rounded-[10px]">search</button> */}
        </form>
    )
}
