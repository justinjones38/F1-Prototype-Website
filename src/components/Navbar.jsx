import "./Navbar.css"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)


export default function Navbar({ windowWidth }) {
    // Setting state to track whether hamburger menu is open or closed 
    const [hamburgerMenu, setHamburgerMenu] = useState(false);

    // Array of navItems 
    const navItems = [{
        id: 0,
        name: "Schedule",
        link: "#schedule"
    }, {
        id: 1,
        name: "Standings",
        link: "#standings"
    }, {
        id: 2,
        name: "Drivers",
        link: "#drivers"
    }, {
        id: 3,
        name: "Teams",
        link: "#teams"
    }]



    return (
        <nav className="navbar">
            <h1 className="nav-title">
                <a href="#home" className="nav-title-link">F1 Pit Wall</a>
            </h1>
            <button className="hamburger-menu" onClick={() => setHamburgerMenu(true)}><FontAwesomeIcon icon="fa-solid fa-bars" /></button>
            <div className={hamburgerMenu && windowWidth < 600 ? "nav-menu show" : "nav-menu"} onClick={() => setHamburgerMenu(false)}>
                <button className="close-button" onClick={() => setHamburgerMenu(false)}><FontAwesomeIcon icon="fa-solid fa-x" /></button>
                <ul className="nav-items">
                    {navItems.map(navItem => (
                        <li className="nav-item" key={navItem.id}><a href={navItem.link} className="nav-link">{navItem.name}</a></li>
                    ))}
                </ul>
            </div>

        </nav>
    )
}