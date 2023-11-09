import { useState } from 'react'
import './App.css'
import BoxRisultati from './components/BoxRisultati'
import Button from './components/Button'
import DiceContainer from './components/diceContainer'
function App() {
  // array contenente il valore dei dadi tirati fino ad ora, necessario per aggiornare lo stato di BOxRisultati, che è un componente figlio di App.js e sibling di DiceContainer (che è il componente che genera i risultati)
  const [risultatiPassati, setRisultatiPassati] = useState([])
  console.log('RISULTATI PASSATI in App.js', risultatiPassati)
  // funzione per resettare i risultati
  function handleReset() {
    setRisultatiPassati(null)
  }

  return (
    <div className='App'>
      <br />
      <h1 className='Titolo'>Charismatic Dice Thrower</h1>
      <br></br>
      <DiceContainer
        setRisultatiPassati={setRisultatiPassati}
        risultatiPassati={risultatiPassati}
      />
      <BoxRisultati risultatiPassati={risultatiPassati} />
      <Button onButtonClick={handleReset}>Reset</Button>
    </div>
  )
}

export default App
