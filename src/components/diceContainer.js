import React from 'react'
import Dice from './Dice'
import './diceContainer.css'

function DiceContainer({ risultatiPassati, setRisultatiPassati }) {
  let clearDice = false
  // se non ci sono risultati passati, allora il dado è "pulito"
  console.log(!risultatiPassati)
  if (!risultatiPassati) {
    clearDice = true
    console.log('clearDice in DiceContainer', clearDice)
  }

  function handleDiceRoll([tipoDado, valoreDado]) {
    // aggiungo il valore del dado tirato all'array dei risultati, aggiornando lo stato di App.js
    const updatedResults = fillResults(tipoDado, valoreDado)
    // aggiorno lo stato di App.js con i risultati aggiornati
    setRisultatiPassati(updatedResults)
  }

  function fillResults(tipoDado, valoreDado) {
    let newResults = { ...risultatiPassati } // ! SEMPRE COPIARE LO STATO PRIMA DI MODIFICARLO
    // se risultatiPassati è null, allora lo inizializzo come oggetto vuoto, altrimenti aggiungo il valore del dado tirato all'array dei risultati
    if (!newResults) {
      newResults = {}
    }
    if (newResults[tipoDado]) {
      newResults[tipoDado].push(valoreDado)
    } else {
      newResults[tipoDado] = [valoreDado]
    }

    // increase the counter of the dice thrown
    newResults.counter ? newResults.counter++ : (newResults.counter = 1)

    return newResults
  }

  return (
    <div className='diceContainer'>
      <Dice
        onDiceRoll={handleDiceRoll}
        risultatiPassati={risultatiPassati}
        tipoDado='4'
        clearDice={clearDice}
      />
      <Dice
        onDiceRoll={handleDiceRoll}
        risultatiPassati={risultatiPassati}
        tipoDado='6'
        clearDice={clearDice}
      />
      <Dice
        onDiceRoll={handleDiceRoll}
        risultatiPassati={risultatiPassati}
        tipoDado='8'
        clearDice={clearDice}
      />
      <Dice
        onDiceRoll={handleDiceRoll}
        risultatiPassati={risultatiPassati}
        tipoDado='10'
        clearDice={clearDice}
      />
      <Dice
        onDiceRoll={handleDiceRoll}
        risultatiPassati={risultatiPassati}
        tipoDado='12'
        clearDice={clearDice}
      />
      <Dice
        onDiceRoll={handleDiceRoll}
        risultatiPassati={risultatiPassati}
        tipoDado='20'
        clearDice={clearDice}
      />
    </div>
  )
}
export default DiceContainer
