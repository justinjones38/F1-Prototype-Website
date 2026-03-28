import "./ConstructorStandings.css"

export default function ConstructorStandings({constructors, isFiltered}) {
    console.log(constructors);

    return (
        <div className="constructor-standing-container">
            <table className="constructor-standing-table">
                <thead className="constructor-standing-thead">
                    <tr className="constructor-standing-thead-row">
                        <th>Pos.</th>
                        <th>Constructor</th>
                        <th>Points</th>
                        <th>Wins</th>
                    </tr>
                </thead>
                <tbody className="constructor-standing-thead">
                    {constructors.map(constructor => (
                        <tr className="constructor-standing-thead-row" key={constructor.Constructor.constructorId}>
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
