import styles from "./Drivers.module.css"

export default function Drivers(props) {
    const drivers = props.drivers.Drivers.filter(driver => driver.permanentNumber);

    // Used to get access to constructor of each driver
    const driverStandings = props.driverStandings.StandingsLists[0].DriverStandings;
    console.log(driverStandings);
    const driversInfo = drivers.map(driver => {
        const findDriverInfo = driverStandings.find(item => item.Driver.permanentNumber === driver.permanentNumber);
        return {
            ...driver,
            ...findDriverInfo
        }
    })

    return (
        <div className={styles.driverContainer}>
            <div className={styles.cards}>
                <h2 className={styles.title}>Drivers</h2>
                {driversInfo.map(driver => (
                    <div className={styles.driverCard} key={driver.permanentNumber}>
                        <p className={styles.drivingNumber}> {driver.permanentNumber}</p>
                        <h3 className={styles.driver}>{driver.givenName} {driver.familyName}</h3>
                        <p className={styles.constructors}>{driver.Constructors[0].name}</p>
                        <div className={styles.personalInfo}>
                            <p className={styles.nationality}>{driver.nationality}</p>
                            <p className={styles.dateOfBirth}>{driver.dateOfBirth}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}