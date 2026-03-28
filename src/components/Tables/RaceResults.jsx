import "./RaceResults.css"

export default function RaceResults({ podiumResults }) {
    return (
        <table className="card-last-table">
            <thead className="card-last-thead">
                <tr className="card-last-thead-row">
                    <th className="pos-col" aria-label="Position">Pos.</th>
                    <th className="driver-col">Driver</th>
                    <th className="gap-col">Gap</th>
                </tr>
            </thead>
            <tbody className="card-last-body">
                {podiumResults.map(driver => (
                    <tr key={driver.number} className="card-last-tbody-row">
                        <td className="pos-col">{driver.position}</td>
                        <td className="driver-col">{driver.Driver.givenName} {driver.Driver.familyName}</td>
                        <td className="gap-col">{driver.Time.time}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}