import "./Navbar.css"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)


export default function Navbar() {
    const [hamburgerMenu, setHamburgerMenu] = useState(false);

    return (
        <nav className="navbar">
            <h1 className="nav-title">F1 Pit Wall</h1>
            <button className="hamburger-menu"><FontAwesomeIcon icon="fa-solid fa-bars" /></button>

        
            <ul className="nav-items">
                <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="#schedule" className="nav-link">Schedule</a></li>
                <li className="nav-item"><a href="#standings" className="nav-link">Standings</a></li>
                <li className="nav-item"><a href="#drivers" className="nav-link">Drivers</a></li>
                <li className="nav-item"><a href="#teams" className="nav-link">Teams</a></li>
            </ul>
        </nav>
    )
}