import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'
function App() {
  
  return (
    <main>
        <Home />
        <Modal />
        <Sidebar />
    </main>
  )
}

export default App
