import "./HeroSection.css"
import Card from "../Card/NextRaceCard.jsx"

export default function HeroSection({ calendar, driverStandings, constructorStandings, getMonthName }) {

    // Finding the next event, if no event, then section skipped
    const findNextEvent = calendar.Races.find(event => parseInt(event.round) === parseInt(constructorStandings.round) + 1);
    const findLastEventCompleted = calendar.Races.find(event => parseInt(event.round) === parseInt(constructorStandings.round));
    console.log(findNextEvent);
    console.log(findLastEventCompleted);

    // Getting only the top 5 in driver standings
    const filterDriverStandings = driverStandings.StandingsLists[0].DriverStandings.filter((driver, index) => (
        index < 5
    ));

    return (
        <section className="hero-section">
            <h3 className="hero-section-title">
                {calendar.season} Season - Round {constructorStandings.round} of {calendar.Races.length}
            </h3>

            {findNextEvent ? 
                <Card 
                    raceInfo="Next Race"
                    raceTitle={findNextEvent.raceName}
                    circuitName={findNextEvent.Circuit.circuitName}
                    date={findNextEvent.date}
                    getMonthName={getMonthName}
                /> 
                
                : null}

            <div className="hero-section-standings">
                <div className="hero-section-drivers">

                </div>
                <div className="hero-section-constructors"></div>
            </div>
        </section>
    )
} 