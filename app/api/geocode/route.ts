import { NextResponse } from 'next/server';
import axios from 'axios';

const MAP_TILER_KEY = process.env.MAP_TILER_KEY;

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const placeName = searchParams.get('placeName');

    if (!placeName) {
        return NextResponse.json({ error: 'Missing placeName parameter' }, { status: 400 });
    }

    if (!MAP_TILER_KEY) {
        console.error("MAP_TILER_KEY is not set.");
        return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    try {
        const res = await axios.get(
            `https://api.maptiler.com/geocoding/${encodeURIComponent(placeName)}.json`,
            {
                params: { key: MAP_TILER_KEY, limit: 1 }
            }
        );

        const feature = res.data.features?.[0];
        if (!feature) {
            return NextResponse.json({ latitude: undefined, longitude: undefined });
        }

        const [lon, lat] = feature.geometry.coordinates;
        return NextResponse.json({ latitude: lat as number, longitude: lon as number });

    } catch (error) {
        console.error("Geocoding API error:", error);
        return NextResponse.json({ error: 'Failed to fetch coordinates' }, { status: 500 });
    }
}
