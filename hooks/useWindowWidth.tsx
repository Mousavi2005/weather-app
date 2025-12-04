import { useState, useEffect } from "react";

export function useWindowWidth() {
    const [width, setWidth] = useState<number | null>(null);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        // Set initial width on mount
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
}
