import React, { Component } from 'react'

export class RefDemo extends Component {
    constructor(props) {
      super(props)

      this.inputRef = React.createRef()
      // call back approach
      this.cbref = null
      this.setCbRef = element => {
        this.cbref = element
      }
    }

    componentDidMount(){
        // this.inputRef.current.focus()
        // console.log(this.inputRef)

        if(this.cbref){
            this.cbref.focus()
        }
    }

    eventHandler = () => {
        alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
        <input type='text ' ref={this.inputRef} />
        <input type='text ' ref={this.setCbRef} />

        <button onClick={this.eventHandler}>Click</button>
      </div>
    )
  }
}

export default RefDemo