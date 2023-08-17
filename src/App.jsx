
import { useState } from 'react';
import './App.css'
import Card from './Components/Card'
import Form from './Components/Form';

function App() {
  
  const [mostrarEleccion, setMostrarEleccion] = useState(false)
  

  return (
    <div className='Add'>
      <Form libro={libro} setMostrarEleccion ={setMostrarEleccion}/>
      {mostrarEleccion && <Card mostrarEleccion={mostrarEleccion} libro={libro}/>}
      
    </div>
   
  )
}

export default App
