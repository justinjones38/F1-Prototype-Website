import { useEffect, useState } from 'react'
import Navbar from './components/Navbar';

import './App.css'

export default function App() {
  // Gets the width of the screensize
  const [eventList, setEventList] = useState([]);



  return (
    <div className='app'>
      <header>
        <Navbar />
      </header>
    </div>
  )
}

