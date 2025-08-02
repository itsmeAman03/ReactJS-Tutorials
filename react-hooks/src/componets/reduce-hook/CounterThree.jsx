import React , {useDeferredValue, useReducer } from 'react'

//  simple state and action
// multiple use reducer

const initialState = 0
const reducer = (state,action ) =>
 {
    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state -1
        case 'reset':
            return initialState
        default:
            return state
    }
}


function CounterThree() {
    const  [count, dispatch] = useReducer(reducer,initialState)
    const [counttwo , dispatchtwo] = useReducer(reducer,initialState)
  return (
    <div>
        <h2>Count - {count} </h2>
        <br />
        <button  onClick={() =>dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>

        <div>
        <h2>Count two - {counttwo} </h2>
        <br />
        <button  onClick={() =>dispatchtwo('increment')}>Increment</button>
        <button onClick={() => dispatchtwo('decrement')}>Decrement</button>
        <button onClick={() => dispatchtwo('reset')}>Reset</button>
        </div>
    </div>
  )
}

export default CounterThree