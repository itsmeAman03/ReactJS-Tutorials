import React , {useState ,useEffect } from 'react'

function Hookcounterone() {

    const [count,setcount] = useState(0)
    const [name,setname] = useState('')
    useEffect (() =>{
      console.log('useEffect - Updating document title')
      document.title = `You clicked ${count} times`
    },[count])


  return (
    <div>
     <input type="text" value={name} onChange={e => setname(e.target.value)} />
     <button onClick={() => setcount(count + 1 )}>Click {count} times</button>
    </div>
  )
}

export default Hookcounterone

