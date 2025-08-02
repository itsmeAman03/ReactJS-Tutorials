import React, { Component } from 'react'

class ErrorBoundary extends Component {
    static getDerivedStateFromError(error){
        return{
            hasError:true
        }
    }

    constructor(props) {
      super(props)
    
      this.state = {
         hasError:false
      }
    }

    componentDidCatch(error,info){
        console.log(error)
        console.log(info)
      }
  render() {
    if(this.state.hasError){
        return <h1>Something wrong</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary


// error boundaries catch error during rendering
// cant catch error using event handler like onClick 


// Error boundaries are React components that catch JavaScript error in their child
// component tree, log those errors, and display a fall-back UI.

// A class component becomes an Error Boundary by defining either or both of
// getDerivedStateFromError and componentDidCatch lifecycle methods.

// The placement of the Error Boundary also matters as it controls if the entire app
// should have the fall-back Ul or just the component causing the problem.

// Provide a way to gracefully handle error in application code.