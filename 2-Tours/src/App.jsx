import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Tours from './Tours'
import Loading from './Loading'
import Tour from './Tour'
import { useEffect } from 'react'

const url = `https://course-api.com/react-tours-project`;

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTour = tours.filter(tour => tour.id !== id)
    setTours(newTour)
  }

  const fetchTours = async () => {
    setLoading(true);

  // const response = await fetch(url);
  // const tours = await response  .json();
  // console.log(tours);

    try {
      const response = await fetch(url);
      const tours = await response  .json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(false);
    }
  }
  

  useEffect(() => {
    fetchTours();
  }, [])

  if(loading){
    return(
      <main>
        <Loading />
      </main>
    )
  }

  if(tours.length === 0){
    return <main>
      <div className='title'>
        <h2>No Tours Left</h2>
        <button onClick = {fetchTours}>Refresh</button>
      </div>
    </main>
  }
  return (
    <main>
      <Tours  tours = { tours } removeTour = {removeTour}/>
    </main>
  )
}

export default App
