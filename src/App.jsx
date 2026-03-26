import { useEffect, useState } from 'react'
import Navbar from './components/Navbar';

import './App.css'
import HeroSection from './components/HeroSection';

export default function App() {
  // Gets the width of the screensize
  const [data, setData] = useState({})
  const [error, setError] = useState(false);

  const today = new Date();
  const year = today.getFullYear();



  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataRes = await Promise.all([
          fetch(`https://api.jolpi.ca/ergast/f1/${year}/races/?format=json`),
          fetch(`https://api.jolpi.ca/ergast/f1/${year}/driverstandings/?format=json`),
          fetch(`https://api.jolpi.ca/ergast/f1/${year}/constructors/?format=json`),
          fetch(`https://api.jolpi.ca/ergast/f1/${year}/drivers/?format=json`),
          fetch(`https://api.jolpi.ca/ergast/f1/${year}/constructors/?format=json`)
        ])

        dataRes.forEach(res => {
          if (!res.ok) {
            throw new Error;
          }
        })

        const fetchingData = await Promise.all(dataRes.map(res => res.json()));

      //  Getting the values from the fetchingData Array
        const [calendar, driverStandings, constructorStandings, drivers, constructors] = fetchingData;

        setData({
          calendar: calendar.MRData.RaceTable,
          driverStandings: driverStandings.MRData.StandingsTable,
          constructorStandings: constructorStandings.MRData.ConstructorTable,
          drivers: drivers.MRData.DriverTable,
          constructors: constructors.MRData.ConstructorTable
        })
      } catch {
        setError(true);
      }
    }

    fetchData()
  }, [])

  if (!data || Object.keys(data).length === 0) {
    return;
  }


  if (error) {
    return;
  }
  console.log(data);

  return (
    <div className='app'>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection
          calendar={data.calendar.MRData}
          driverStandings={data.driverStandings.MRData}
          constructorStandings
        />
      </main>



    </div>
  )
}

