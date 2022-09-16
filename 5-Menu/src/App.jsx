import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
const allCategories = ['all', ...new Set(items.map((item) => item.category))] ;

function App() {
  const [menuItem, setMenuItem] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const fileterItems = (category) => {
      if(category === 'all'){
        setMenuItem(items);
        return;
      }
      const newItems = items.filter((item) => 
        item.category === category)
        setMenuItem(newItems)
  }

  return (
   <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories = {categories} filterItems = {fileterItems}/>
        <Menu items = {menuItem} />
      </section>
   </main>
  )
}

export default App
