import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Navbar'
import CartContainer from './CartContainer'

import { useGlobalContext } from './context'

function App() {
  const [count, setCount] = useState(0)

  return (
   <main>
      <Navbar />
      <CartContainer />
   </main>
  )
}

export default App
