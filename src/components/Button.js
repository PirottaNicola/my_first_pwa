import './Button.css'

function Button({ children, onButtonClick }) {
  return (
    <>
      <button className='Button' onClick={onButtonClick}>
        {children}
      </button>
    </>
  )
}

export default Button
