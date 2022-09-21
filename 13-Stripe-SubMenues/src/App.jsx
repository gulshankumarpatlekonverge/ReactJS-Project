import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Sidebar from './Sidebar'
import Submenu from './Submenu'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
   </>
  )
}

export default App
