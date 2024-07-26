import { useState } from 'react'

import Navbar from './components/Navbar.jsx'
import {UserDetails} from "./components/UserDetails.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <UserDetails/>
    </>
  )
}

export default App
