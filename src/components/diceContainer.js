import React from 'react'
import Dice from './Dice'
import './diceContainer.css'

function DiceContainer(props) {
  // array contenente il valore dei dadi tirati fino ad ora
  const [risultatiPassati, setRisultatiPassati] = React.useState([])

  function handleDiceRoll(value) {
    // aggiungo il valore del dado tirato all'array dei risultati
    setRisultatiPassati([...risultatiPassati, value])
    // data to pass to App.js (parent), i cannot pass the state directly because it is async, so it would be outdated
    props.onDiceThrow([...risultatiPassati, value])
  }

  return (
    <div className='diceContainer'>
      <Dice onDiceThrow={handleDiceRoll} tipo_dado='4' />
      <Dice onDiceThrow={handleDiceRoll} tipo_dado='6' />
      <Dice onDiceThrow={handleDiceRoll} tipo_dado='8' />
      <Dice onDiceThrow={handleDiceRoll} tipo_dado='10' />
      <Dice onDiceThrow={handleDiceRoll} tipo_dado='12' />
      <Dice onDiceThrow={handleDiceRoll} tipo_dado='20' />
    </div>
  )
}
export default DiceContainer
