import styles from "./SessionCard.module.css"
import { convertDate, convertTime, getDayOfWeek } from "../../utils/helper";

export default function SessionCard(props) {
    if (!props.info || Object.keys(props.info).length === 0) {
        return;
    }

    const dayOfWeek = getDayOfWeek(props.info.date, props.info.time)

    return (
        <div className={styles.cardContainer}>
            <h4 className={styles.cardTitle}>{props.title}</h4>
            <p className={styles.cardDay} aria-label={dayOfWeek.full}>{dayOfWeek.abbr}</p>
            <p className={styles.cardDate}>{convertDate(props.info.date, props.info.time)}</p>
            <p className={styles.cardTime}>{convertTime(props.info.date, props.info.time)}</p>
        </div>
    )
}