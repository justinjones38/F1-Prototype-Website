import styles from "./Standings.module.css"

export default function ConstructorStandings({constructors, isFiltered}) {
    console.log(constructors);

    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead className={styles.tableHead}>
                    <tr className={styles.tableHeadRow}>
                        <th>Pos.</th>
                        <th>Constructor</th>
                        <th>Points</th>
                        <th>Wins</th>
                    </tr>
                </thead>
                <tbody className={styles.tableBody}>
                    {constructors.map(constructor => (
                        <tr className={styles.tableBodyRow} key={constructor.Constructor.constructorId}>
                            <td>{constructor.position}</td>
                            <td>{constructor.Constructor.name}</td>
                            <td>{constructor.points}</td>
                            <td>{constructor.wins}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>   
    )
}
