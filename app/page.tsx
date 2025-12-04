"use client"
import Header from "@/components/header/header";
import TopBody from "@/components/top-body/top-body";
import Body from "@/components/body/body";
import Primary from "@/components/body/primary/primary";

import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import getWeather from "@/components/api";
import { useEffect, useState } from "react";
import { setWeather } from "@/store/weatherSlice";

export default function Home() {

    const dispatch = useDispatch()

    const weather = useQuery({
        queryKey: ["getWeather"],
        queryFn: () => getWeather()
    })

    useEffect(() => {
        dispatch(setWeather(weather.data))
    }, [weather])

    // console.log(weather.data);

    return (
        <main className="w-screen h-screen flex flex-col items-center justify-between bg-[url('/images/earth.jpg')] bg-cover bg-center bg-no-repeat sm:bg-[hsl(0,0%,10%)] text-[hsl(0,0%,95%)]">
            <TopBody></TopBody>
            <div className="w-full max-w-[1500px] h-[90%] flex flex-col items-center justify-end gap-[16%] sm:gap-0">
                <Primary></Primary>
                <Body></Body>
            </div>
        </main>
    );
}
