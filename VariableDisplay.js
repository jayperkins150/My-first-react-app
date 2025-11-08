import React from 'react';
import App from './App.css'

function VariableDisplay(props) {
    const var1 = "Test";
    const var2 = 5;
    const var3 = false;
    const var4 = { 
        random: "You are our randomly selected winner!",
        status: "Winner",
        rank: 1,
    };
    const var5 = ["YOU", "ARE", "THE", "WINNER!", <br></br>];

    if (Math.random() < .4) {
        return (
            <div>
                <h1><br></br>{var4.random}</h1>
                {var5.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
        );
    } else {
        return <p>Refresh the page</p>;
    }
}

export default VariableDisplay;