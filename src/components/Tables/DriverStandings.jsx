import "./DriverStandings.css"

export default function DriverStandings({drivers, isFiltered}) {
    return (
        <div className="drivers-standing-container">
            <table className="driver-standing-table">
                <thead className="driver-standing-thead">
                    <tr className="driver-standing-thead-row">
                        <th>Pos</th>
                        <th>Driver</th>
                        <th>Points</th>
                        <th>Wins</th>
                    </tr>
                </thead>
                <tbody className="driver-standing-tbody">
                    {drivers.map(driver => (
                        <tr className="driver-standing-thead-row" key={driver.Driver.permanentNumber}>
                            <td>{driver.position}</td>
                            <td>
                                <p className="driver-standing-thead-row-name">
                                    {driver.Driver.givenName} {driver.Driver.familyName}
                                </p>
                                <p className="driver-standing-thead-row-detail">
                                    {driver.Constructors[0].name}
                                </p>
                            </td>
                            <td>{driver.points}</td>
                            <td>{driver.wins}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}