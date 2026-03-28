import "./HeroSection.css"
import NextRaceCard from "../Cards/NextRaceCard.jsx";
import LastRaceCard from "../Cards/LastRaceCard.jsx";
import UpcomingSchedule from "../Cards/UpcomingSchedule.jsx";
import DriverStandings from "../Tables/DriverStandings.jsx";
import ConstructorStandings from "../Tables/ConstructorStandings.jsx";

import { useState } from "react";

export default function HeroSection({ calendar, driverStandings, constructorStandings, results, convertDate, convertTime }) {
    const [driverStandingsState, setDriverStandingsState] = useState(true);

    // Get current round of schedule
    const eventRoundCompleted = parseInt(constructorStandings.round);

    // Finding the next event, if no event, then section skipped
    const findNextEvent = calendar.Races.find(event => parseInt(event.round) === eventRoundCompleted + 1);

    // Find the last event completed, if season has started, then it is skipped
    const findLastEventCompleted = results.Races.find(event => parseInt(event.round) === eventRoundCompleted);

    // Get upcoming schedule for calendar
    const upcomingSchedule = calendar.Races.filter(event => event.round > eventRoundCompleted + 1 && event.round < eventRoundCompleted + 5);


    // Getting only the top 5 in driver standings
    const filterDriverStandings = driverStandings.StandingsLists[0].DriverStandings.filter((driver, index) => (
        index < 5
    ));

    // Getting only the top 5 in the constructor standings
    const filterConstructorStandings = constructorStandings.StandingsLists[0].ConstructorStandings.filter((constructor, index) => (
        index < 5
    ));

    return (
        <section className="hero-section">
            <h3 className="hero-section-title">
                {calendar.season} Season - Round {constructorStandings.round} of {calendar.Races.length}
            </h3>

            {findNextEvent ?
                <NextRaceCard
                    event={findNextEvent}
                    convertDate={convertDate}
                    convertTime={convertTime}
                />
                : null}

            <div className="hero-secondary-cards">
                {findLastEventCompleted ?
                    <LastRaceCard
                        event={findLastEventCompleted}
                    />
                    : null}

                {upcomingSchedule && upcomingSchedule.length !== 0 ?
                    <UpcomingSchedule upcomingSchedule={upcomingSchedule} convertDate={convertDate} />
                    : null}
            </div>


            <div className="hero-section-standings">
                <div className="hero-section-button-container">
                    <button disabled={driverStandingsState} className="hero-section-button" onClick={() => setDriverStandingsState(true)}>Drivers</button>
                    <button disabled={!driverStandingsState} className="hero-section-button" onClick={() => setDriverStandingsState(false)}>Constructors</button>
                </div>
                {driverStandingsState ?
                    <DriverStandings drivers={filterDriverStandings} isFiltered={true} />
                    :
                    <ConstructorStandings constructors={filterConstructorStandings} isFiltered={true} />
                }
            </div>
        </section>
    )
} 