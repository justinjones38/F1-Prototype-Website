import RaceResults from "../Tables/RaceResults"
import "./LastRaceCard.css"

export default function LastRaceCard(props) {
    const podiumResults = props.event.Results.filter((item, index) => index < 3)
    return (
        <div className="card-last">
            <p className="card-last-info" >Previous Race Results</p>
            <h4 className="card-last-title">{props.event.raceName} - Round {props.event.round}</h4>
            <RaceResults podiumResults={podiumResults} />
        </div>
    )
}