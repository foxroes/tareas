const Button = ({ color, texto }) => {

  const onClick = () => {
    console.log('Hiciste click') 
  }

  return (
    <button onClick={onClick} style={{ backgroundColor: color }} className='btn'>{texto}</button>
  )
}

export default Button