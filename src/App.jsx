import { useEffect, useState } from 'react'
import Navbar from './components/Navbar';

import './App.css'
import HeroSection from './components/HeroSection';

export default function App() {
  // Gets the width of the screensize
  const [data, setData] = useState({})
  const [error, setError] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const dataRes = await Promise.all([
        fetch(`https://api.jolpi.ca/ergast/f1/2026/races/?format=json`),
      ])

      dataRes.forEach(res => {
        if (!res.ok) {
          throw new Error;
        }
      })

      const fetchingData = await Promise.all(dataRes.map(res => res.json()));
      const [calendar] = fetchingData;
      setData({
        calendar
      })



    }
    fetchData()
  }, [])

  if(!data || Object.keys(data).length === 0) {
    return;
  }

  return (
    <div className='app'>
      <header>
        <Navbar />
        <HeroSection />
      </header>
    </div>
  )
}

