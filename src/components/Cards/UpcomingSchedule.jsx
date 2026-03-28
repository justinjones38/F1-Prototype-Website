import "./SecondaryHeroCard.css"

export default function UpcomingSchedule(props) {
    console.log(props.upcomingSchedule)
    return (
        <div className="card-upcoming-container">
            <p className="card-upcoming-info">Upcoming Schedule</p>
            {props.upcomingSchedule.map(event => (
                <div className="card-upcoming-race" key={event.round}>
                    <div className="card-upcoming-race-left">
                        <h4 className="card-upcoming-race-title">{event.raceName}</h4>
                        <p className="card-upcoming-race-round">Round {event.round}</p>
                    </div>
                    <div className="card-upcoming-race-right">
                        <p className="card-upcoming-race-date">{props.convertDate(event.date)}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}