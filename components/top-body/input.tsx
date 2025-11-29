"use client"

import { useState } from "react"
import { Search } from "lucide-react"

export default function Input() {
    const [place, setPlace] = useState("")

    function handleSubmit() {
        if (place === "") return
        // search for weather od the place
        setPlace("")
    }

    return (
        <form onSubmit={handleSubmit}
            className="w-[40%] h-8 flex gap-4 items-center justify-around" action="">
            <div className="w-full h-full flex gap-2 items-center bg-gray-300 rounded-full px-2">
                {/* <img src="/icons/icon-search.svg" alt="search" /> */}
                <Search className="text-gray-600"></Search>
                <input value={place}
                    placeholder="Search for a place ..."
                    className="w-full focus:outline-0 text-gray-800"
                    onChange={(e) => {
                        e.preventDefault()
                        setPlace(e.target.value)
                    }} />
            </div>
            <button className="w-24 h-8 bg-purple-400 rounded-[10px] text-gray-100">search</button>
        </form>
    )
}
