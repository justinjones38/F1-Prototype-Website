import styles from "./Results.module.css"

export default function RaceResults({ podiumResults }) {
    return (
        <table className={styles.table}>
            <thead className={styles.tableHead}>
                <tr className={styles.tableHeadRow}>
                    <th className={styles.posCol} aria-label="Position">Pos</th>
                    <th className={styles.driverCol}>Driver</th>
                    <th className={styles.gapCol}>Gap</th>
                </tr>
            </thead>
            <tbody className={styles.tableBody}>
                {podiumResults.map(driver => (
                    <tr key={driver.number} className={styles.tableBodyRow}>
                        <td className={styles.posCol}>{driver.position}</td>
                        <td className={styles.driverCol}> 
                            <p className={styles.driverInfo}>{driver.Driver.givenName} {driver.Driver.familyName}</p>
                            <p className={styles.teamInfo}>{driver.Constructor.name}</p>
                            </td>
                        <td className={styles.gapCol}>{driver.Time.time}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}