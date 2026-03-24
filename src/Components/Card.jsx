
const Card = (props) => {
    const {eventList} = props;

    const eventCard = eventList.map((event, index) => {
        return (
            <div className="card" key={event.meeting_key}>
                <img src={event.circuit_image} alt={event.location} className="card-img" />
                <div className="card-info">
                    <h2 className="card-title"> {event.meeting_name}</h2>
                    <div className="card-name">{event.location}</div>
                    <p className="card-round">Round {index + 1}</p>
                    <p className="card-date">{event.date_start} - {event.date_end}</p>
                </div>
                <a href={event.link} target="_blank" rel="noreferrer" className="card-button">More Info</a>
            </div>
        )
    })
    return (
        <div className="card-container">
            {eventCard}
        </div>
    )
}

export default Card;