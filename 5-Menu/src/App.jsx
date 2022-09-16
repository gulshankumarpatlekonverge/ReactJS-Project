import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [item, setItem] = useState(items)
  return (
   <main>
      <Menu />
      <Categories />
   </main>
  )
}

export default App
