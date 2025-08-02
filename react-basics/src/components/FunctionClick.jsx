import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('Button clicked')
    }
  return (
    <div>
        <h1>Hello </h1>
        <button onClick={clickHandler}>Click Here!!</button>
    </div>
  )
}

export default FunctionClick