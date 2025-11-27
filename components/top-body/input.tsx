"use client"

import { useState } from "react"

export default function Input() {
    const [place, setPlace] = useState("")

    function handleSubmit() {
        if (place === "") return
        // search for weather od the place
        setPlace("")
    }

    return (
        <form onSubmit={handleSubmit}
        className="w-[30%] h-8 flex gap-4 items-center justify-around" action="">
            <div className="w-full h-full flex gap-2 items-center bg-[hsl(243,27%,20%)] rounded-[10px] px-2">
                <img src="/icons/icon-search.svg" alt="search" />
                <input value={place}
                placeholder="Search for a place ..."
                className="w-full focus:outline-0"
                onChange={(e) => {
                    e.preventDefault()
                    setPlace(e.target.value)
                }} />
            </div>
            <button className="w-24 h-8 bg-[hsl(233,67%,56%)] rounded-[10px]">search</button>
        </form>
    )
}
