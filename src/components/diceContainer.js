import React from 'react'
import Dice from './Dice'
import './diceContainer.css'

function DiceContainer({ onDiceThrow, risultatiPassati, setRisultatiPassati }) {
  function handleDiceRoll(value) {
    // aggiungo il valore del dado tirato all'array dei risultati, aggiornando lo stato di App.js
    setRisultatiPassati([...risultatiPassati, value])
    // invece ora
    onDiceThrow([...risultatiPassati, value])
  }
  let clearDice = risultatiPassati.length === 0 ? true : false

  return (
    <div className='diceContainer'>
      <Dice onDiceThrow={handleDiceRoll} clearDice={clearDice} tipo_dado='4' />
      <Dice onDiceThrow={handleDiceRoll} clearDice={clearDice} tipo_dado='6' />
      <Dice onDiceThrow={handleDiceRoll} clearDice={clearDice} tipo_dado='8' />
      <Dice onDiceThrow={handleDiceRoll} clearDice={clearDice} tipo_dado='10' />
      <Dice onDiceThrow={handleDiceRoll} clearDice={clearDice} tipo_dado='12' />
      <Dice onDiceThrow={handleDiceRoll} clearDice={clearDice} tipo_dado='20' />
    </div>
  )
}
export default DiceContainer
