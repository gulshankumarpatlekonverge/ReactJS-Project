import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Question from './Question'
import data from './data'

function App() {
  const [question, setQuestion] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>Questin and Answer about Login</h3>
        <section className="info">
          {
            question.map(question => {
              return <Question key={question.id} {...question} />
            })
          }
        </section>
      </div>
    </main>
  )
}

export default App
