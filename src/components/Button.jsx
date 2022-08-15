const Button = ({color, texto}) => {
  return (
    <button style={{background: color}} className='btn'>{texto}</button>
  )
}

export default Button