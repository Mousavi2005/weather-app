"use client"

import { useEffect, useState } from "react"
import { Search } from "lucide-react"
import { getLatLon } from "../serch"
import { useQueryClient } from "@tanstack/react-query"
import getWeather from "../api"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentCity } from "@/store/placeSlice"
import { setIsSearching, setError } from "@/store/searchSlice"
import type { RootState } from "@/store/store"
import { toast } from "react-hot-toast"

export default function Input() {
    const queryClient = useQueryClient()
    const dispatch = useDispatch()
    const [place, setPlace] = useState("")
    const isSearching = useSelector((state: RootState) => state.search.isSearching)
    const error = useSelector((state: RootState) => state.search.error)
    console.log("error is: ", error);

    useEffect(() => {
        if (error) {
            toast(error, {
                style: {
                    background: "#059669",
                    color: "#fff",
                    padding: "1rem",
                    borderRadius: "1.5rem",
                    fontWeight: "normal",
                },
            });
        }
        dispatch(setError(null))

    }, [error])

    async function handleSubmit() {
        if (!place) return;

        dispatch(setIsSearching(true));

        try {
            const location = await getLatLon(place);

            if (!location) {
                dispatch(setError("No result found"));
                return;
            }

            const data = await queryClient.fetchQuery({
                queryKey: ["getWeather"],
                queryFn: () => getWeather(location),
            });

            if (!data?.hourly_future?.length) {
                dispatch(setError("No result found"));
                return;
            }
            dispatch(setCurrentCity(place));

        } catch (err) {
            dispatch(setError("Failed to fetch weather"));

        } finally {
            dispatch(setIsSearching(false));
        }
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
                    disabled={isSearching}
                    placeholder="Search for a place ..."
                    className="transition-all duration-300 w-0 group-hover:sm:w-32 group-hover:w-[90px] group-hover:md:w-56 focus:outline-0 text-[hsl(0,0%,15%)]"
                    onChange={(e) => setPlace(e.target.value)}
                />
            </div>

            {/* <button className="w-22 h-8 hidden md:block bg-teal-600 rounded-[10px]">search</button> */}
        </form>
    )
}
