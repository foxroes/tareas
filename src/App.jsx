import { useState } from "react"
import Header from "./components/Header"
import Tareas from "./components/Tareas"

function App() {

  const [tareas, setTareas] = useState([ // Aquí, "tareas" es el "estado" y "setTareas" es lo que permite modificar el "estado"
    {
        id: 1,
        texto: 'Ir al súper',
        fecha: '10 de agosto de 2022',
        terminada: true
    },
    {
        id: 2,
        texto: 'Ver partido del Ame',
        fecha: '11 de agosto de 2022',
        terminada: false
    },
    {
        id: 3,
        texto: 'Acariciar a mi gato',
        fecha: '12 de agosto de 2022',
        terminada: false
    },
])

// Borrar una tarea

const borrarTarea = (id) => {
  //console.log('borrar', id)

  setTareas(tareas.filter((tarea)=> tarea.id !== id))
}

  return (
    <div className='container'>
      <Header titulo="Tareas" />
      {tareas.length > 0 ? <Tareas tareas={tareas} onDelete={borrarTarea} /> : 'No hay tareas por mostrar'}
      
    </div>
  )
}

export default App
