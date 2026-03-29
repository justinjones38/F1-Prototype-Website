import styles from "./Standings.module.css"

export default function DriverStandings({drivers, isFiltered}) {
    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead className={styles.tableHead}>
                    <tr className={styles.tableHeadRow}>
                        <th>Pos</th>
                        <th>Driver</th>
                        <th>Points</th>
                        <th>Wins</th>
                    </tr>
                </thead>
                <tbody className={styles.tableBody}>
                    {drivers.map(driver => (
                        <tr className={styles.tableBodyRow} key={driver.Driver.permanentNumber}>
                            <td>{driver.position}</td>
                            <td>
                                {driver.Driver.givenName} {driver.Driver.familyName}
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