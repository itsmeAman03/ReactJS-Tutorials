import React from "react"

// functional component
// function Greet() {
//     return <h1>Hello World!</h1>
// }

//with ES6 function

// const Greet = ({name,heroname}) => { destructure in parameters

const Greet = (props) => {
    const {name,heroname} = props // destructure props in function
    return (
        <div>
            <h1>Hello {name} a.k.a {heroname}</h1>
            {/* {props.children}  */}
        </div>
    )
}
export default Greet

//to retirive the name from the compoent we use props that are like parameter or arguments like we do in function
//named export
// export const Greet = () => <h1>Hello World</h1>


//props are immutable hence they cant be changed