/* import React from 'react' */

const NavBar = () => {

    const estilos = {
        border: 'solid red 1px', 
        color: 'blue'
    }
  
    return (
    <div>
        <li style={estilos}>Nosotros</li>
        <li style={{color: 'red'}}>Productos</li>
        <li style={estilos}>Computadores</li>
        <li style={estilos}>Tablets</li>
    </div>
  )
}

export default NavBar     