import React , {Component } from "react";

class Welcome extends Component {

    render() {
        const {name,heroname} = this.props // destructuring props in class components
        // return <h1> Welcome {this.props.name} a.k.a {this.props.heroname}</h1>
        return <h1> Welcome {name} a.k.a {heroname}</h1>
    }
}

export default Welcome

//class component

//props are immutable hence they cant be changed