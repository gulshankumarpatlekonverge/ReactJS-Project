import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import data from './data';
import list from './List';
import List from './List';
import React from 'react';

function App() {
  const [people, setPeople] = React.useState(data);
  return (
    <main>
      <section className='container'>
        <h3>{people.length} Birthday Today</h3>
        <List people = { people }/>
        <button onClick={() => { setPeople([])}}>Clear All</button>
      </section>
    </main>
  )
}

export default App
