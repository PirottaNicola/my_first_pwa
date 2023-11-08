import { useState } from 'react'
import './App.css'
import BoxRisultati from './components/BoxRisultati'
import Button from './components/Button'
import DiceContainer from './components/diceContainer'
function App() {
  // array contenente il valore dei dadi tirati fino ad ora, da passare a BoxRisultati
  const [risultatiPassati, setRisultatiPassati] = useState([])
  // resetta i risultati passati
  const handleReset = () => {
    setRisultatiPassati([])
  }

  return (
    <div className='App'>
      <br />
      <h1 className='Titolo'>Charismatic Dice Thrower</h1>
      <br></br>
      <DiceContainer
        onDiceThrow={setRisultatiPassati}
        setRisultatiPassati={setRisultatiPassati}
        risultatiPassati={risultatiPassati}
      />
      <BoxRisultati risultati_passati={risultatiPassati} />
      <Button onButtonClick={handleReset}>Reset</Button>
    </div>
  )
}

export default App
