import React , { useState } from 'react'

function HookCounterfour() {
    const [array ,setarray] = useState([])
    const addItem = () => {
        setarray([...array,{
            id:array.length,
            value : Math.floor(Math.random() *10 ) +1
        }])
    }
  return (
    <div>
        <button onClick={addItem}>Add a number</button>
        <ul>
            {
               array.map(item =>(
                <li key={item.id}>{item.value}</li>
               )) 
            }
        </ul>
    </div>
  )
}

export default HookCounterfour

//useState - Summary
// The useState hook lets you add state to functional components
// In classes, the state is always an object.
// With the useState hook, the state doesn't have to be an object.
// The useState hook returns an array with 2 elements.
// The first element is the current value of the state, and the second element is a state setter
// function.
// New state value depends on the previous state value? You can pass a function to the setter
// function.
// When dealing with objects or arrays, always make sure to spread your state variable and then
// call the setter function