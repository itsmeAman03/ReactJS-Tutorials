import React from 'react'
import Person from './Person'

function NameList() {

    const names = ['Bruce','Diana','Clark']
    const nameList = names.map(name => <h2>{name}</h2>)

    const persons = [
        {
            id:1,
            name:'Bruce',
            age:30,
            skill:'batman'
        },
        {
            id:2,
            name:'Diana',
            age:25,
            skill:'wonder woman'
        },
        {
            id:3,
            name:"clark",
            age:20,
            skill:'angular'
        }
    ]

    // const personList = persons.map(person => (
    //     <h2>
    //         I am {person.name}. My age is {person.name}.My skill {person.skill}
    //     </h2>
    // ))

    //passing person as prop

    // const personList = persons.map(person => <Person person={person} />)
    const personList = persons.map(person => <Person key={person.id} person={person} />)

    ///key prop are is not acccessible in child component so do not enter data in key if u want to use it in child 

    

    const nameL = names.map((name,index) => <h2 key={index}>{index} {name}</h2>)


    //index as key anti-pattern // we sometimes looses our data 

    
  return (
    <div>
        {/* <h2>{names[0]}</h2>  // this method to show elements
        <h2>{names[1]}</h2>
        <h2>{names[2]}</h2> */}


        {/* using map */}

        {/* { names.map(name => <h2>{name}</h2>)} */}

        {/* {nameList} */}

        {/* {personList} */}

        {nameL}

    </div>
  )
}

export default NameList


//displaying list in react 

//when to use index as a key

//1 the items in list do not have a unique id
//2 the list is a static list and will not change
//3 the list will never be reordrered pr filtered
