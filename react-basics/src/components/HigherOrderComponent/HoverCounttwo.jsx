import React, { Component } from 'react'

export class HoverCountertwo extends Component {

  render() {
    const {count ,incCount} = this.props
    return (
      <div>
        <h2 onMouseOver={incCount}>Hovered {count} times</h2>
      </div>
    )
  }
}

export default HoverCountertwo