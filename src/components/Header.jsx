import Button from "./Button"

const Header = ({titulo}) => {
  return (
    <header className='header'>
        <h1>{titulo}</h1>
        <Button color='green' texto='Add'/>
    </header>
  )
}

/* Una forma de poner estilos: 
const estilo = {
    color: 'green',
    background: 'black'
}
*/

// Más estilos: 
/*
<h1 style={{color: 'red'}}>{titulo}</h1>
*/

export default Header