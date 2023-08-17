import React from 'react'

const Card = (libro) => {
  return (
    <div>
        <h3>Hola {libro.nombre}!</h3>
        <h4>Sabemos que tu libro favorito es {libro.libroFav}</h4>
    </div>
  )
}

export default Card