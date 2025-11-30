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

        const location = await getLatLon(place); // { lat, lon }

        // fetch the new query and cache it
        await queryClient.fetchQuery({
            queryKey: ["getWeather"],
            queryFn: () => getWeather(location)
        });
        dispatch(setCurrentCity(place))
        setPlace("");
    }


    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
        }}
            className="w-[40%] h-8 flex gap-4 items-center justify-around" action="">
            <div className="w-full h-full flex gap-2 items-center bg-[hsl(0,0%,95%)] rounded-full px-2">
                <Search className="text-[hsl(0,0%,15%)]"></Search>
                <input value={place}
                    placeholder="Search for a place ..."
                    className="w-full focus:outline-0 text-[hsl(0,0%,15%)]"
                    onChange={(e) => {
                        e.preventDefault()
                        setPlace(e.target.value)
                    }} />
            </div>
            <button className="w-24 h-8 bg-teal-600 rounded-[10px]">search</button>
        </form>
    )
}
