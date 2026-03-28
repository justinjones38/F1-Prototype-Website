import "./SessionCard.css"

export default function SessionCard(props) {
    if(!props.info || Object.keys(props.info).length === 0) {
        return;
    }

    return (
        <div className="card-session">
            <h4 className="card-session-title">{props.title}</h4>
            <p className="card-session-date">{props.convertDate(props.info.date)}</p>
            <p className="card-session-time">{props.convertTime(props.info.date, props.info.time)}</p>
        </div>
    )
}