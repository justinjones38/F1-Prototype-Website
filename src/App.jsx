import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar';

import './App.css'
import HeroSection from './components/Layout/HeroSection';

export default function App() {
  // Gets the width of the screensize
  const [data, setData] = useState({})
  const [error, setError] = useState(false);

  const today = new Date();
  const year = today.getFullYear();

  const convertDate = (date) => {
    const convertedDate = new Date(date)
    const monthIndex = convertedDate.getMonth();
    const newDate = convertedDate.getUTCDate();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${months[monthIndex]} ${newDate}`
  }

  const convertTime = (date, time) => {
    const convertedTime = new Date(`${date}T${time}`)
    const convertedHours = convertedTime.getHours();
    
    const hours = convertedHours < 10 ? `0${convertedHours}` : convertedHours;
    const convertedMinutes = convertedTime.getMinutes();
    const minutes = convertedMinutes < 10 ? `0${convertedMinutes}` : convertedMinutes;
    return `${hours}:${minutes}`
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataRes = await Promise.all([
          fetch(`https://api.jolpi.ca/ergast/f1/${year}/races/?format=json`),
          fetch(`https://api.jolpi.ca/ergast/f1/${year}/driverstandings/?format=json`),
          fetch(`https://api.jolpi.ca/ergast/f1/${year}/constructorstandings/?format=json`),
          fetch(`https://api.jolpi.ca/ergast/f1/${year}/drivers/?format=json`),
          fetch(`https://api.jolpi.ca/ergast/f1/${year}/constructors/?format=json`),
          fetch(`https://api.jolpi.ca/ergast/f1/${year}/results/?format=json`)
        ])

        dataRes.forEach(res => {
          if (!res.ok) {
            throw new Error;
          }
        })

        const fetchingData = await Promise.all(dataRes.map(res => res.json()));

      //  Getting the values from the fetchingData Array
        const [calendar, driverStandings, constructorStandings, drivers, constructors, results] = fetchingData;

        setData({
          calendar: calendar.MRData.RaceTable,
          driverStandings: driverStandings.MRData.StandingsTable,
          constructorStandings: constructorStandings.MRData.StandingsTable,
          drivers: drivers.MRData.DriverTable,
          constructors: constructors.MRData.ConstructorTable,
          results: results.MRData.RaceTable
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

  return (
    <div className='app'>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection
          calendar={data.calendar}
          driverStandings={data.driverStandings}
          constructorStandings={data.constructorStandings}
          results={data.results}
          convertDate={convertDate}
          convertTime={convertTime}
        />
      </main>



    </div>
  )
}

