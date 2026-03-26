import { useState } from "react";
import "./HeroSection.css"

export default function HeroSection({ calendar, driverStandings, constructorStandings }) {
    console.log(driverStandings);
    return (
        <section className="hero-section">
            <h3 className="hero-section-title">
                {calendar.season} Season - Round {constructorStandings.round} of {calendar.Races.length}
            </h3>
            <div className="hero-section-standings">
                <div className="hero-section-drivers">

                </div>
                <div className="hero-section-constructors"></div>
            </div>
        </section>
    )
} 