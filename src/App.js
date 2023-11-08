import { useState } from 'react'
import './App.css'
import BoxRisultati from './components/BoxRisultati'
import DiceContainer from './components/diceContainer'
function App() {
  // array contenente il valore dei dadi tirati fino ad ora, da passare a BoxRisultati
  const [risultatiPassati, setRisultatiPassati] = useState([])

  return (
    <div className='App'>
      <br />
      <h1 className='Titolo'>Charismatic Dice Thrower</h1>
      <br></br>
      <DiceContainer onDiceThrow={setRisultatiPassati} />
      <BoxRisultati risultati_passati={risultatiPassati} />
    </div>
  )
}

export default App
