// Import react and reactROM libraries
import React from 'react';
import ReactDOM from 'react-dom';


// create a react component
const App = function(){
    const buttonText = {text:'click me'};   
    const labelText = 'Enter Name: ' 
    return (
        <div>
    <label className="label" htmlFor="name">{labelText}</label>
    <input id="name" type="text"/>
    <button
            style={{ backgroundColor:'blue', color:'white'}}>{buttonText.text}</button>
    </div>
    );

}


// Take react component and display on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

