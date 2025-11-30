import { Sun, CloudRain, Cloud, CloudLightning, Snowflake, CloudFog, CloudDrizzle } from "lucide-react";


function getIcon(wcode: number, size: number = 35, isDay: boolean = true) {
    if ([0, 1].includes(wcode) && isDay) return <img src="/icons/sun.svg" />;
    if ([0, 1].includes(wcode) && !isDay) return <img src="/icons/moon.svg" />;
    if ([2, 3].includes(wcode) && isDay) return <img src="/icons/partly-cloudy-day.svg" className="w-full h-full object-contain" />;
    if ([2, 3].includes(wcode) && !isDay) return <img src="/icons/partly-cloudy-night.svg" />;
    if ([45, 48].includes(wcode)) return <img src="/icons/fog.svg" />;
    if ([51, 53, 55, 56, 57,].includes(wcode)) return <img src="/icons/showers.svg" />;
    if ([61, 63, 65, 66, 67, 80, 81, 82].includes(wcode)) return <img src="/icons/heavy-showers.svg" />;
    if ([71, 73, 75, 77, 85, 86].includes(wcode)) return <img src="/icons/snow.svg" />;
    if ([95, 96, 99].includes(wcode)) return <img src="/icons/thunderstorm.svg" />;

    return <Cloud size={55} />
}

export { getIcon }
