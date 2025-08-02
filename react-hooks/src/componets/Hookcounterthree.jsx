import React , {useState} from 'react'

function Hookcounterthree() {
    const [name , setName] = useState({fname:'',lname:''})
  return (
    <div>
        <form>
            <label>FirstName</label>
            <input type="text" value={name.fname} onChange={e => setName({...name ,fname : e.target.value})}/> {/* ...name , fname:e.target.value means  copy every property in object but only update fname*/}
            <br />
            <label>LastName</label>
            <input type="text" value={name.lname} onChange={e => setName({...name ,lname : e.target.value})} />
            <br />
            <h2>Your FirstName is - {name.fname}</h2>
            <h2>Your LastName is - {name.lname}</h2>

            <h2>{JSON.stringify(name)}</h2>
        </form>
    </div>
  )
}

export default Hookcounterthree