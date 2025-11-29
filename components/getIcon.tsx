import { Sun, CloudRain, Cloud, CloudLightning, Snowflake, CloudFog, CloudDrizzle } from "lucide-react";

function getIcon(wcode: number) {
    if ([0, 1].includes(wcode)) return <Sun size={55} />;
    if ([2, 3].includes(wcode)) return <Cloud size={55} />;
    if ([45, 48].includes(wcode)) return <CloudFog size={55} />;
    if ([51, 53, 55, 56, 57,].includes(wcode)) return <CloudDrizzle size={55} />;
    if ([61, 63, 65, 66, 67, 80, 81, 82].includes(wcode)) return <CloudRain size={55} />;
    if ([71, 73, 75, 77, 85, 86].includes(wcode)) return <Snowflake size={55} />;
    if ([95, 96, 99].includes(wcode)) return <CloudLightning size={55} />;

    return <Cloud size={55} />
}

export { getIcon }
