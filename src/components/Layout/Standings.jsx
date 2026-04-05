import { useState } from "react";
import styles from "./Standings.module.css";
import DriverStandings from "../Tables/DriverStandings";
import ConstructorStandings from "../Tables/ConstructorStandings";

export default function Standings(props) {
  const [isDriverStandings, setIsDriverStandings] = useState(true);
  return (
    <div className={styles.standings}>
      <h2 className={styles.title}>Standings</h2>
      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          onClick={() => setIsDriverStandings(true)}
          disabled={isDriverStandings}
        >
          Drivers
        </button>
        <button
          className={styles.button}
          onClick={() => setIsDriverStandings(false)}
          disabled={!isDriverStandings}
        >
          Constructors
        </button>
      </div>
      {isDriverStandings ? (
        <DriverStandings
          drivers={props.driverStandings.StandingsLists[0].DriverStandings}
          isFiltered={false}
        />
      ) : (
        <ConstructorStandings
          constructors={
            props.constructorStandings.StandingsLists[0].ConstructorStandings
          }
          isFiltered={false}
        />
      )}
    </div>
  );
}
