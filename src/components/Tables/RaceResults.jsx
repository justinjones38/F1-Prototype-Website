import "./RaceResults.css"

export default function RaceResults({ podiumResults }) {
    console.log(podiumResults);
    return (
        <table className="card-last-table">
            <thead className="card-last-thead">
                <tr className="card-last-thead-row">
                    <th aria-label="Position">Pos.</th>
                    <th>Driver</th>
                    <th>Gap</th>
                </tr>
            </thead>
            <tbody className="card-last-body">
                {podiumResults.map(driver => (
                    <tr key={driver.number} className="card-last-tbody-row">
                        <td>{driver.position}</td>
                        <td>{driver.Driver.givenName} {driver.Driver.familyName}</td>
                        <td>{driver.Time.time}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}