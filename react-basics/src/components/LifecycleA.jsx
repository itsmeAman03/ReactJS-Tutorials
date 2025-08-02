import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

export class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Aman'
      }
      console.log('Lifecycle A constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('LifecycleA getsnapshotbeforeupdate')
        return null
    }

    changeState = () => {
        this.setState({
            name : "Luffy"
        })
    }
  render() {
      console.log('LifecycleA render')
    return (
        <div>

            <div>LifecycleA </div>
            <button onClick={this.changeState}>Change State</button>
            <LifecycleB />
        </div>
    )
  }
}

export default LifecycleA


// life cycle of class component

//1 constructor(props)
//2 getDerivedStateFromProps(props,state)
//3 render
//4 componentDidMount

//Updated lifecycle of class component

//1 constructor(props)
//2 getDerivedStateFromProps(props,state)
//3 render()
//4 getSNapshotUpdate(prevProp,prevState)
//5 componentDidUpdate(prevProps,prevState,snapshot)


//unmount phase method

//` componentWillUnmount()