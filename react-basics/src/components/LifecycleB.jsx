import React, { Component } from 'react'


export class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Aman'
      }
      console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleB componentDidMount')
    }

    componentDidMount(){
        console.log('LifecycleB componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('LifecycleB getsnapshotbeforeupdate')
        return null
    }

  render() {
    console.log('LifecycleB render')
    return (
            <div>LifecycleB </div>
         
    )
  }
}

export default LifecycleB