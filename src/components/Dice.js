import { Howl } from 'howler'
import { useState } from 'react'
import './Dice.css'
//importo TUUUUUUUTTI gli audio dei dadi
import d10_10 from '../audio/d10_10.mp3'
import d20_1 from '../audio/d20_1.mp3'
import d20_19 from '../audio/d20_19.mp3'
import d20_20 from '../audio/d20_20.mp3'
import d20_9 from '../audio/d20_9.mp3'
import d4_1 from '../audio/d4_1.mp3'

function Dice({ tipoDado, onDiceRoll, clearDice }) {
  //definisco lo stato del mio componente
  const [valoreDado, setValoreDado] = useState('?')
  const [rolling, setRolling] = useState(false)

  let displayedValue = valoreDado

  if (clearDice) {
    displayedValue = '?'
  }

  function handleDiceThrow() {
    // setto lo stato rolling a true per far partire l'animazione
    setRolling(true)

    //genero un numero casuale tra 0 e 1, lo moltiplico per il tipo di dado e lo arrotondo per difetto
    const n = Math.random()
    const newValue =
      Math.floor(n * tipoDado) + 1 !== tipoDado + 1
        ? Math.floor(n * tipoDado) + 1
        : tipoDado
    //nel caso uscisse 1 dal math random, col +1 andrebbe oltre, per questo l'operazione ternaria

    // aggiorno lo stato del valore del dado tirato
    setValoreDado(newValue)
    // passo il valore del dado tirato al componente padre
    onDiceRoll([tipoDado, newValue])

    // choose the right audio to play based on the dice thrown and the value
    let sound
    window.Howler.stop() //rolling a dice stops every other ongoing audio
    switch (tipoDado) {
      case '4':
        switch (valoreDado) {
          case 1:
            sound = new Howl({ src: d4_1 })
            sound.play()
            break
          default:
            break
        }
        break
      case '6':
        switch (valoreDado) {
          case 1:
            sound = new Howl({ src: d4_1 })
            sound.play()
            break

          default:
            break
        }
        break
      case '8':
        switch (valoreDado) {
          case 1:
            sound = new Howl({ src: d4_1 })
            sound.play()
            break

          default:
            break
        }
        break
      case '10':
        switch (valoreDado) {
          case 1:
            sound = new Howl({ src: d4_1 })
            sound.play()
            break
          case 9:
            sound = new Howl({ src: d20_9 })
            sound.play()
            break
          case 10:
            sound = new Howl({ src: d10_10 })
            sound.play()
            break

          default:
            break
        }
        break
      case '12':
        switch (valoreDado) {
          case 1:
            sound = new Howl({ src: d4_1 })
            sound.play()
            break
          case 9:
            sound = new Howl({ src: d20_9 })
            sound.play()
            break

          default:
            break
        }
        break
      case '20':
        switch (valoreDado) {
          case 1:
            sound = new Howl({ src: d20_1 })
            sound.play()
            break
          case 9:
            sound = new Howl({ src: d20_9 })
            sound.play()
            break
          case 10:
            sound = new Howl({ src: d10_10 })
            sound.play()
            break
          case 19:
            sound = new Howl({ src: d20_19 })
            sound.play()
            break
          case 20:
            sound = new Howl({ src: d20_20 })
            sound.play()
            break
          default:
            break
        }
        break
      default:
        break
    }

    // wait 1 second (have to sleep the same amount of time of animation duration)
    setTimeout(() => {
      setRolling(false)
    }, 1000)
  }

  return (
    <div
      className={rolling ? 'dice_rolling' : 'dice_not_rolling'}
      onClick={handleDiceThrow}
      tipodado={tipoDado}
    >
      <p>d {tipoDado}</p>
      <h3> {displayedValue} </h3>
    </div>
  )
}

export default Dice
