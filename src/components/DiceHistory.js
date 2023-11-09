import './DiceHistory.css'

function DiceHistory({ diceType, pastRolls }) {
  return (
    <div className='DiceHistory'>
      <div className='dice' dicetype={diceType}>
        <h3>{diceType}</h3>
      </div>
      {pastRolls?.length > 0 ? (
        pastRolls.map((roll, index) => {
          return <p key={index}>{roll}</p>
        })
      ) : (
        <p>nor rolled</p>
      )}
    </div>
  )
}
export default DiceHistory
