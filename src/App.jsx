
import { useState } from 'react';
import './App.css'
import Card from './Components/Card'
import Form from './Components/Form';

function App() {

  const [libro, setLibro] = useState({
    nombre:"",
    libroFav:"",
})
  
  const [mostrarEleccion, setMostrarEleccion] = useState(false)
  

  return (
    <div className='Add'>
      <Form libro={libro} mostrarEleccion = {mostrarEleccion} setMostrarEleccion ={setMostrarEleccion} setLibro={setLibro}/>
      {mostrarEleccion && <Card libro={libro}/>}
      
    </div>
   
  )
}

export default App
