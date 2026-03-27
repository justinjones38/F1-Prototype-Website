export default function NextRaceCard({event, convertDate}) {

    const today = new Date().getTime();

    // Function to get days between section
    const getTimeDifference = (date) => {
        const raceDate = new Date(date).getTime();
        return Math.ceil((raceDate - today) / 1000 / 3600 / 24)
    }

    console.log(event);
    return (
        <div className="card-next-container">
            <div className="card-next-race-info">
                <div className="card-next-track-info">
                    <p className="card-next-alert">Next Race</p>
                    <h3 className="card-next-header">{event.raceName}</h3>
                    <p className="card-next-description">
                        {convertDate(event.date)} - {event.Circuit.circuitName}
                    </p>

                </div>
                <div className="card-next-countdown-container">
                    <p className="card-next-countdown">
                        <span>{getTimeDifference(event.date)}</span> days to go
                    </p>
                </div>
                <div className="card-next-session-times">
                    

                </div>

            </div>
        </div>
    )
}