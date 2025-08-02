import React, { Component } from 'react'

class COunter extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count : 0
        }
      }
    incCount = () => {
          this.setState(prevState => {
              return { count: prevState.count + 1 }
          })
      }
  render() {
    return (
      <div>
        {this.props.render(this.state.count ,this.incCount)}
      </div>
    )
  }
}

export default COunter