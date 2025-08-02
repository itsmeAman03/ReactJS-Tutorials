import React, { PureComponent } from 'react'

class Purecomponent extends PureComponent {
  render() {
    console.log("**Pure comp render**")
    return (
        <div>
            Purecomponent {this.props.name}
        </div>
    )
  }
}

export default Purecomponent


//pure component

// A pure componenent implements shouldComponentUpdate with a shallow prop and state comparison

// SC of prevState with currentState 
// SC of prevProps with currentProps

// for both the above cases component will re-render


//Shallow coma=parision

//primitive types 
// a (SC) b return true if a and b have same value and are of the same type
// Ex: string 'aman' (SC) string 'aman' return true

// complex types
// a (SC) b return true if a and b refrences the exact same Object
// { name : "Aman" , age :21 } (SC) { name : "Aman" , age :21 } return false


// React.memo also does shallow comparison but it will not work with function as props because functions cannot be compared by === operator in JS