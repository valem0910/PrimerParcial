import React, { useState } from 'react'

const Form = (libro, setLibro, mostrarEleccion, setMostrarEleccion) => {



const [show, setShow] = useState(false)
const [error, setError] = useState(false)

const handlesumit = (e) => {
    e.preventDefault()
    if(libro.nombre.length > 3 && libro.libroFav.length >= 6){
        setShow(true)
        setError(false)
        setMostrarEleccion(true)
    } else {
        setError(true)
        setMostrarEleccion(false)
    }
}


  return (
    <form>
        <label>Nombre</label>
        <input type="text" value = {libro.nombre} onChange={(e) => setLibro({...libro, nombre: e.target.value })}  />
        <label>Libro Favorito</label>
        <input type="text" value = {libro.libroFav} onChange={(e) => setLibro({...libro, libroFav: e.target.value })} />
        <button onSubmit={handlesumit}>Enviar</button>
        {error && <h4 style={{color: "red"}} >Por favor chequea que la información sea correcta </h4>}
    </form>
  )
}

export default Form