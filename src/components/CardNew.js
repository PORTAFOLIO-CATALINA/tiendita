import React, { useState } from 'react'

const CardNew = (props) => {

    /* const [first, setfirst] = useState(second)
 */
    return (
        <>

            <div>Componente CardNew</div>
            {props.otroComponente({name:'Javier', edad: 24})}
        </>
    )
}

export default CardNew