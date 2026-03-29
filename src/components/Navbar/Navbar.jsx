import styles from "./Navbar.module.css"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)


export default function Navbar({windowWidth}) {
    // Setting state to track whether hamburger menu is open or closed 
    const [hamburgerButton, setHamburgerButton] = useState(false);


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
        <nav className={styles.navbar}>
            <h1 className={styles.navTitle}>
                <a href="#home" className={styles.navTitleLink}>F1 Pit Wall</a>
            </h1>
            <button className={styles.hamburgerMenu} onClick={() => setHamburgerButton(true)}><FontAwesomeIcon icon="fa-solid fa-bars" /></button>
            <div className={hamburgerButton && windowWidth < 600 ? `${styles.navMenu} ${styles.show}` : `${styles.navMenu}`} onClick={() => setHamburgerButton(false)}>
                <button className={styles.closeButton} onClick={() => setHamburgerButton(false)}><FontAwesomeIcon icon="fa-solid fa-x" /></button>
                <ul className={styles.navItems}>
                    {navItems.map(navItem => (
                        <li className={styles.navItem} key={navItem.id}><a href={navItem.link} className={styles.navLink}>{navItem.name}</a></li>
                    ))}
                </ul>
            </div>

        </nav>
    )
}