import React from 'react'
import Dice from './Dice'
import './diceContainer.css'

function DiceContainer() {
  return (
    <div className='diceContainer'>
      <Dice
        onDiceRoll={(valore_dado) => console.log(valore_dado)}
        tipo_dado='4'
      />
      <Dice
        onDiceRoll={(valore_dado) => console.log(valore_dado)}
        tipo_dado='6'
      />
      <Dice
        onDiceRoll={(valore_dado) => console.log(valore_dado)}
        tipo_dado='8'
      />
      <Dice
        onDiceRoll={(valore_dado) => console.log(valore_dado)}
        tipo_dado='10'
      />
      <Dice
        onDiceRoll={(valore_dado) => console.log(valore_dado)}
        tipo_dado='12'
      />
      <Dice
        onDiceRoll={(valore_dado) => console.log(valore_dado)}
        tipo_dado='20'
      />
    </div>
  )
}

export default DiceContainer
