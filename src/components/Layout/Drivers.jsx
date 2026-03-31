import styles from "./Drivers.module.css"

export default function Drivers(props) {
    const drivers = props.drivers.Drivers.filter(driver => driver.permanentNumber);

    // Used to get access to constructor of each driver
    const driverStandings = props.driverStandings.StandingsLists[0].DriverStandings;
    const driversInfo = drivers.map(driver => {
        const findDriverInfo = driverStandings.find(item => item.Driver.permanentNumber === driver.permanentNumber);
        return {
            ...driver,
            ...findDriverInfo
        }
    })

    return (
        <div className={styles.driverContainer}>
            <h2 className={styles.title}>Drivers - {props.drivers.season} Season</h2>
            <div className={styles.cards}>
                {driversInfo.map(driver => (
                    <div className={styles.driverCard} key={driver.permanentNumber}>
                        <h3 className={styles.drivingNumber}>{driver.permanentNumber}</h3>
                        <p className={styles.driver}>{driver.givenName} {driver.familyName}</p>
                        <p className={styles.constructors}>{driver.Constructors[0].name}</p>
                        <div className={styles.personalInfoContainer}>
                            <div className={styles.personalInfo}>
                                <p className={styles.personalInfoDescription}>Nationality</p>
                                <p className={styles.ersonalInfoValue}>{driver.nationality}</p>
                            </div>
                            <div className={styles.personalInfo}>
                                <p className={styles.personalInfoDescription}>Date of Birth</p>
                                <p className={styles.dateOfBirth}>{driver.dateOfBirth}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}