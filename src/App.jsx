import { useEffect, useState } from 'react'
import Navbar from './components/Navbar';

import './App.css'

export default function App() {
  // Gets the width of the screensize
  const [windowWidth, setWindowWith] = useState(window.innerWidth);

  const [eventList, setEventList] = useState([]);

    // Code to get the windowWidth in px
    useEffect(() => {
        const handleResize = () => {
            setWindowWith(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])

  return (
    <div className='app'>
      <header>
        <Navbar windowWidth={windowWidth} />
      </header>
    </div>
  )
}

