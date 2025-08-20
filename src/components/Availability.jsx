import { useReducer, useState, useEffect } from 'react';
import BookingForm from './BookingForm.jsx'
import { defaultAvailability, updateTimes, initializeTimes } from './availabilityUtils.jsx'

const Availability = () => {
    

    const [availability, dispatchAvailability] = useReducer(updateTimes, defaultAvailability, initializeTimes);
    const [dateTimesReady, setDateTimesReady] = useState(false);

    useEffect(() => {

        import('../api.js').then(() => {
            console.log("API script loaded");
            setDateTimesReady(true);
        }).catch((error) => {
            console.error("Failed to load API script", error);
        });

        //const apiScript = document.createElement("script");
        //apiScript.onload = () => {
        //    console.log("fetchAPI script loaded");
        //    setDateTimesReady(true);
        //};
        //apiScript.onerror = () => {
        //    console.error("unable to load fetchAPI script");
        //};
        //document.body.appendChild(apiScript);

        //return () => {
        //    document.body.removeChild(apiScript);
        //};
    }, []);

    const handleDateTime = async (date) => {
        if (dateTimesReady && typeof (window.fetchAPI) === "function") {
            const dateTimes = window.fetchAPI(new Date(date));
            dispatchAvailability({
                type: 'date-times',
                times: dateTimes
            });
        } else {
            console.error("fetchAPI is not available yet");
        }
    };

    return (
        <>
            <BookingForm
                availableTimes={availability}
                setAvailableTimes={dispatchAvailability}
                onDateChange={handleDateTime} />
        </>
    )
}
export default Availability;