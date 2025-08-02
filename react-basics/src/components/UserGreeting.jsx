import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn: true
      }
    }
  render() {

    // 1st approach
    // if(this.state.isLoggedIn){
    //     return (
    //         <div>
    //             Welcome Aman
    //         </div>
    //     )
    // }
    // else{
    //     return (
    //       <div>Welcome Guest</div>
    //     )
    // }

    //2nd approach 

    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome Aman</div>
    // }
    // else{
    //     message = <div>Welcome Guest</div>
    // }

    // return <div>{message}</div>

    //3rd approach

    // return (
    //     this.state.isLoggedIn?
    //     (<div>Welcome Aman</div>):(<div>Welcome Guest</div>)
    // )

    //4th 
     return this.state.isLoggedIn && <div>Welcome Aman</div>
  }
}

export default UserGreeting

// conditional rendering
// for methods
// 1. if-else 
// 2. element variable
// 3. ternary conditional operator
// 4. short circuit operator