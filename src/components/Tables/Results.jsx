import styles from "./Results.module.css"

export default function RaceResults({ podiumResults }) {
    return (
        <table className={styles.table}>
            <thead className={styles.tableHead}>
                <tr className={styles.tableHeadRow}>
                    <th className={styles.posCol} aria-label="Position">Pos.</th>
                    <th className={styles.driverCol}>Driver</th>
                    <th className={styles.gapCol}>Gap</th>
                </tr>
            </thead>
            <tbody className="card-last-body">
                {podiumResults.map(driver => (
                    <tr key={driver.number} className="card-last-tbody-row">
                        <td className={styles.posCol}>{driver.position}</td>
                        <td className={styles.driverCol}>{driver.Driver.givenName} {driver.Driver.familyName}</td>
                        <td className={styles.gapCol}>{driver.Time.time}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}