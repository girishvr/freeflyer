import { useState, useEffect } from "react";

const useGeoLocation = () => {
    const [locatn, setlocatn] = useState({
        loaded: false,
        coordinates: { lat: "", lng: "" },
    });

    const onSuccess = (locatn) => {
        setlocatn({
            loaded: true,
            coordinates: {
                lat: locatn.coords.latitude,
                lng: locatn.coords.longitude,
            },
        });
    };

    const onError = (error) => {
        setlocatn({
            loaded: true,
            error: {
                code: error.code,
                message: error.message,
            },
        });
    };

    useEffect(() => {
        // if the browser does not support geo-location (unlikely)
        if (!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: "Geolocation not supported",
            });
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);

    return locatn;
};

export default useGeoLocation;