import React from "react";

const Hello = () => {
    // this is the JSX version 
    // return (
    //     <div className = 'dummuclass'>
    //         <h1>Hello Aman</h1>
    //     </div>
    // );

    //without JSX

    // return React.createElement('div',null,"<h1>Hello Aman</h1>") //output <h1>Hello Aman</h1>
   // return React.createElement('div',null,'h1',"Hello Aman") // output h1Hello Aman
   return React.createElement('div',
   {id: 'hello', className: 'dummyclass'},
   React.createElement('h1',null,'Hello Aman'))
}

export default Hello


// JSX diffrences 

// class -> className
// for -> HTMLFor
// camelCase property naming convention
//     * onclick -> onclick
//     * tabindex -> tabIndex