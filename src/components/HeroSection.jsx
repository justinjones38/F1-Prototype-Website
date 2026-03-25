import { useState } from "react";
import "./HeroSection.css"

export default function HeroSection(props) {
    if (!props.eventList.length) {
        return;
    }
    console.log(props);



    const findNextEvent = props.eventList.find(event => !event.is_completed);
    const findLastEvent = props.eventList.findLast(event => event.is_completed);

    return (
        <h1>Test</h1>
    )
} 