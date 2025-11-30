import axios from "axios";

async function getLatLon(placeName: string) {
    const res = await axios.get(`api/geocode`, {
        params: {
            placeName: placeName
        }
    });

    if (res.data.error) {
        console.error("Geocoding failed:", res.data.error);
        return undefined;
    }

    const { latitude, longitude } = res.data;

    if (latitude === undefined || longitude === undefined) {
        console.log("No results");
        return undefined;
    }

    console.log(longitude, " ", latitude);

    return { latitude: latitude as number, longitude: longitude as number }
}


export { getLatLon }
