import React from 'react'

function Columns() {
    const items = []
  return (
    <>
    {/* // <React.Fragment> */}
        {/* {
            items.map( item => (
                <React.Fragment key={item.id} >
                    <h1>Title</h1>
                    <p>{item.title}</p>
                </React.Fragment>         
            ))
        } */}
        <td>Name</td>
        <td>Vishwas</td>
    {/* // </React.Fragment> */}
    </>
  )
}

export default Columns

// we get an error here cz JSX <div></div> cannot contain <td></td> tag 
// it shows error