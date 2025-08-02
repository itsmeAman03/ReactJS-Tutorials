import React, { Component } from 'react'

class EventBind extends Component {

  constructor(props){
    super(props)

    this.state = {
      message : 'Hello'
    }

    // this.clickHandler = this.clickHandler.bind(this) // third method 
  }

  // clickHandler() {
  //   this.setState({
  //     messgae: 'Clicked the button'
  //   })
  //   console.log(this) // this is undefined in class handler why?
  //   //REason : ES6 React.Component doesn't auto bind methods to itself. You need to bind them yourself in constructor
  //   // Three method to solve : 1. Binding this in event handler 2. using arrow function 3. binding event handler in constructor
  // }

  //defining the event different way

  clickHandler = () => {
    this.setState({
      message: 'GoodBye'
    })
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Clickk</button> */} 
        {/* <button onClick={() => this.clickHandler()}>Clickk</button> */}
        <button onClick={this.clickHandler}>Clickk</button>

      </div>
    )
  }
}

export default EventBind