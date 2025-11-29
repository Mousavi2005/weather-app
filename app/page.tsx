"use client"
import Header from "@/components/header/header";
import TopBody from "@/components/top-body/top-body";
import Body from "@/components/body/body";
import Primary from "@/components/body/primary/primary";

import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import getWeather from "@/components/api";
import { useEffect } from "react";
import { setWeather } from "@/store/weatherSlice";

export default function Home() {

    const dispathc = useDispatch()
    const weather = useQuery({
        queryKey: ["getWeather"],
        queryFn: () => getWeather()
    })

    useEffect(() => {
        dispathc(setWeather(weather.data))
    }, [weather])

    // console.log(weather.data);

    return (
        <main className="w-screen h-screen flex flex-col items-center bg-gray-100 text-black">
            <Header></Header>
            <TopBody></TopBody>
            <Primary></Primary>
            <Body></Body>
        </main>
    );
}
