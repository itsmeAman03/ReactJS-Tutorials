import React from 'react'
import useInput from './hooks/useInput'

function UserForm() {

  const [fname , bindFname , resetFname] = useInput('')
  const [lname , bindLname , resetLname]=  useInput('')

   const submitHandler = (e) => {
      e.preventDefault()
      alert(`Hello ${fname} ${lname}`)
      resetFname()
      resetLname()
    }


  return (
    <div>
        <h2>User Form</h2>
        <form onSubmit={submitHandler}>
            <div>
            <label>First Name</label>
            <input type='text'  {...bindFname} />
            </div>
            <div>
            <label>Last Name</label>
            <input type='text' {...bindLname} />
            </div>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default UserForm