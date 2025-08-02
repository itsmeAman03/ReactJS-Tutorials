import React , {useEffect ,useState} from 'react'

function HookMouse() {
    // const [coords , setCords] = useState({x:0,y:0})
    const [x, setX] = useState(0)
	const [y, setY] = useState(0)

    
    const logMousePosition = (e) => {
        console.log('Mouse Event')
        // setCords ({ x : e.clientX , y : e.clientY})
        setX(e.clientX)
		setY(e.clientY)
    }   
    useEffect( () =>{
      console.log('useEffect called')
      window.addEventListener('mousemove',logMousePosition)

      return () => {
        console.log('Component unmounting code')
        window.removeEventListener('mousemove',logMousePosition)            
      }
    },[])

  return (
    <div>
        <h1>Hook Mouse</h1>
         {/* <p>X position :{coords.x}</p>
         <p>Y Position : {coords.y}</p> */}

         <p>X position :{x}</p>
         <p>Y Position : {y}</p>
    </div>
  )
}

export default HookMouse