import React , {useState} from 'react'

function Hookcountertwo() {

    const  initialCount =0
    const [ count , setcount] = useState(initialCount)

    const incrementfive = () => {
        for(let i=0;i<5 ;i++){
            setcount(prevCount=> prevCount +1 )
        }
    }

  return (
    <div>
        <h3>Count : {count}</h3>
        <br/>

        <button  onClick={() => setcount(prevCount=> prevCount +1 )}>Increment</button>
        <button onClick={() => setcount(prevCount=> prevCount -1 )}>Decrement</button>
        <button onClick={() => setcount(initialCount)}>Reset</button>
        <button onClick={incrementfive}>Increment 5</button>
    </div>
  )
}

export default Hookcountertwo