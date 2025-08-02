import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    incrementCount = () =>{
        this.setState({count : this.state.count +1})
    }
  render() {
    const  { count} = this.state
    return (
      <div>
        ClassCounter
        <br />
        <button onClick={this.incrementCount}>Count {count} times</button>
      </div>
    )
  }
}

export default ClassCounter