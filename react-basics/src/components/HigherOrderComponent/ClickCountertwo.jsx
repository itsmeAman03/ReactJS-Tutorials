import React, { Component } from 'react'

export class ClickCountertwo extends Component {

  render() {
    const {count ,incCount} = this.props
    return (
      <div>
        <button onClick={incCount}>Clicked {count} times</button>
      </div>
    )
  }
}

export default ClickCountertwo