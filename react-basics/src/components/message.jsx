import React , {Component } from "react";

class Message extends Component {

    constructor(){
        super()
        this.state ={
            message: "Welcome visitor"
        }
    }

    changeMessage() {
        this.setState({
            message: "Tanks for clicking"
        })
    }
    render() {
        return (
        <div className="message">
            <h1> 
                {this.state.message}
            </h1>
            <button onClick={()=> this.changeMessage()}>Click Me!!!</button>
        </div>
        )
    }
}

export default Message

// Stage method for class components