import React from "react";
import "./App.css";

import {Button} from 'react-bootstrap';
import doggy_img from "./doggy.png";

function App(): React.JSX.Element {
    return (
        <div className="App">



            <header className="App-header">

                UD CISC275 with React Hooks and TypeScript. Marshall Parker. Hello World.

            </header>
            <div style={{backgroundColor: "red"}}>
                <Button onClick={ () => { console.log("Hello World!") } }>Log Hello World</Button>
            </div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <h1>header</h1>
            <ul>
                <li>X</li>
                <li>Y</li>
                <li>Z</li>
            </ul>

            <img src={doggy_img} alt="Doggy" style = {{width: "100px"}}/>


        </div>
    );
}

export default App;
