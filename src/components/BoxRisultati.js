import './BoxRisultati.css'

function BoxRisultati({ risultati_passati }) {
  // array contenente il valore dei dadi tirati fino ad ora
  let stringa_risultati = ''
  if (risultati_passati) {
    for (const value of risultati_passati) {
      stringa_risultati += value + ' '
    }
  }
  return (
    <div className='boxRisultati'>
      <h1>Box Risultati</h1>
      <h2>Dadi tirati fino ad ora</h2>
      <p>{risultati_passati.length}</p>
      <h2>risultati ottenuti fino ad ora</h2>
      <p>{stringa_risultati}</p>
    </div>
  )
}

export default BoxRisultati
