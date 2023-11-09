import './BoxRisultati.css'
import DiceHistory from './DiceHistory'

function BoxRisultati({ risultatiPassati }) {
  const risultatiDaMostrare = risultatiPassati
  return (
    <div className='boxRisultati'>
      <h1>
        Dices rolled: {risultatiDaMostrare ? risultatiDaMostrare.counter : 0}
      </h1>

      <div className='historyOuterContainer'>
        <div className='historyContainer'>
          <DiceHistory pastRolls={risultatiDaMostrare?.[4]} diceType='d4' />
          <DiceHistory pastRolls={risultatiDaMostrare?.[6]} diceType='d6' />
          <DiceHistory pastRolls={risultatiDaMostrare?.[8]} diceType='d8' />
          <DiceHistory pastRolls={risultatiDaMostrare?.[10]} diceType='d10' />
          <DiceHistory pastRolls={risultatiDaMostrare?.[12]} diceType='d12' />
          <DiceHistory pastRolls={risultatiDaMostrare?.[20]} diceType='d20' />
        </div>
      </div>
    </div>
  )
}

export default BoxRisultati
