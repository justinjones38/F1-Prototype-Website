export default function SessionCard(props) {
    if(!props.info || Object.keys(props.info).length === 0) {
        return;
    }

    return (
        <div className="card-next-session">
            <h4 className="card-next-session-title">{props.title}</h4>
            <p className="card-next-session-date">{props.convertDate(props.info.date)}</p>
            <p className="card-next-session-time">{props.convertTime(props.info.date, props.info.time)}</p>
        </div>
    )
}