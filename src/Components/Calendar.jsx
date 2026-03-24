import { useEffect, useState } from "react";
import Card from "./Card.jsx";
import LoadingPage from "./LoadingPage.jsx";
import eventsJSON from "../events.json"


const Calendar = () => {
    const [eventList, setEventList] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    const events = eventsJSON;

    const transformDate = (date) => {
        var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
        date = new Date(date);
        return `${month[date.getMonth()]} ${date.getDate()}`
    }


    useEffect(() => {
        const fetchData = async () => {{
            try {
                const response = await fetch("https://api.openf1.org/v1/meetings?year=2026");

                if(!response.ok) {
                    throw new Error("API not found")
                }

                const responseJSON = await response.json();

                // Remove Pre-season testing 
                let adjustedData = responseJSON.slice(2);

                adjustedData = adjustedData.map((event, index) => ({
                    ...event,
                    date_start: transformDate(event.date_start),
                    date_end: transformDate(event.date_end),
                    link: events[index].link
                }) )


                setEventList(adjustedData);

            } catch (err) {
                console.log(err);
            }

            finally {
                setLoading(false);
            }
        }}
        fetchData()
    }, []);

    if (loading) {
        return <LoadingPage />
    }

    if (error || !eventList) {
        return <h2 className="error-page">404: Data not found</h2>
    }

    console.log(eventList);
    return (
        <>
            <Card eventList={eventList} />
        </>
    )
}

export default Calendar;