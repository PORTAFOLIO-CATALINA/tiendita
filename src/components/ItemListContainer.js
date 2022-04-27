import React, {useEffect, useState } from 'react'

const ItemListContainer = () => {
  console.log('aqui contador de stock');
  const [count, setCount] = useState(1)

    useEffect(() => {
    console.log('[useEffect]El componente se montó');
    return() => {
        console.log('Se desmonto el componente');
      }
    } , [])
    
    useEffect(()=> {
      console.log('[useEffect]El estado cambio.....');
  } , [count])
  
  const addHandler = () => { 
          console.log('Se esta sumando');
          setCount(count + 1)
      }
  
      const resHandler = () => {
          console.log('Se esta restando');
          setCount(count - 1)
      }
  return (

    <>
    <div>ItemListContainer</div>
            <button onClick={resHandler}> - </button>
            <strong> {count} </strong>
            <button onClick={addHandler}> + </button>


    </>

  )
}

export default ItemListContainer