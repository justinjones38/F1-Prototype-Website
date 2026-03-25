import { useEffect, useState } from 'react'
import Navbar from './components/Navbar';

import './App.css'

export default function App() {
  // Gets the width of the screensize
  const [eventList, setEventList] = useState({});
  const [error, setError] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventRes = await fetch(`https://api.jolpi.ca/ergast/f1/2026/races/?format=json`);
        if (!eventRes.ok) {
          throw new Error();
        }
        const eventData = await eventRes.json();
        console.log(eventData.MRData);
      } catch {

      }

    }
    fetchData();
  })


  return (
    <div className='app'>
      <header>
        <Navbar />
      </header>
    </div>
  )
}

