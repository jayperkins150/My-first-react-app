import React from 'react';
import App from './App.css'

function VariableDisplay(props) {
    const var1 = "Test";
    const var2 = 5;
    const var3 = false;
    const var4 = ["YOU", "ARE", "THE", "WINNER!", <br></br>];
    const var5 = { random: "You won the grand prize!"};

    if (Math.random() < .4) {
        return (
            <div>
                <h1>{var5.random}</h1>
                {var4.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
        );
    } else {
        return <p>Refresh the page</p>;
    }
}

export default VariableDisplay;