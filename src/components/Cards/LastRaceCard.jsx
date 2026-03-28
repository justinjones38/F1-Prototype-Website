import RaceResults from "../Tables/RaceResults"
import "./SecondaryHeroCard.css"

export default function LastRaceCard(props) {
    const podiumResults = props.event.Results.filter((item, index) => index < 3)
    return (
        <div className="card-last">
            <p className="card-last-info" >Previous Race Result</p>
            <h4 className="card-last-title">{props.event.raceName} - Round {props.event.round}</h4>
            <RaceResults podiumResults={podiumResults} />
        </div>
    )
}