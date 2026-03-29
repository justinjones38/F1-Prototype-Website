import styles from "./NextRaceCard.module.css"
import SessionCard from "./SessionCard";
import { convertDate, convertTime } from "../../utils/helper";

export default function NextRaceCard({ event, windowWidth }) {

    const today = new Date().getTime();

    // Function to get days between section
    const getTimeDifference = (date, time) => {
        const raceDate = new Date(`${date}T${time}`).getTime();
        return Math.ceil((raceDate - today) / 1000 / 3600 / 24)
    }

    const timeRemaining = getTimeDifference(event.date, event.time);

    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardRaceInfo}>
                <div className={styles.cardTrackInfo}>
                    <p className={styles.cardInfo}>Next Race</p>
                    <h3 className={styles.cardHeader}>{event.raceName}</h3>
                    <p className={styles.cardDescription}>
                        {convertDate(event.date, event.time)} - {event.Circuit.circuitName}
                    </p>

                </div>
                <div className={styles.cardCountdownContainer}>
                    <p className={styles.cardCountdown}>
                        <span>{timeRemaining}</span> {timeRemaining === 1 ? "day until race" : "days until race"}
                    </p>
                </div>
            </div>
            <div className={styles.cardSessionTimes}>
                <h3 className={styles.cardSessionTimesHeader}>Weekend Schedule</h3>
                <SessionCard title="Free Practice 1" info={event.FirstPractice} windowWidth={windowWidth} isPrimary={false} />
                <SessionCard title="Free Practice 2" info={event.SecondPractice} windowWidth={windowWidth} isPrimary={false} />
                <SessionCard title="Sprint Qualifying" info={event.SprintQualifying} windowWidth={windowWidth} isPrimary={false} />
                <SessionCard title="Free Practice 3" info={event.ThirdPractice} windowWidth={windowWidth} isPrimary={false} />
                <SessionCard title="Sprint" info={event.Sprint} windowWidth={windowWidth} isPrimary={false} />
                <SessionCard title="Qualifying" info={event.Qualifying} windowWidth={windowWidth}  isPrimary={true} />
                <SessionCard title="Race" info={event} windowWidth={windowWidth} isPrimary={true} />
            </div>
        </div>
    )
}