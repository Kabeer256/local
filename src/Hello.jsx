import {useState} from 'react'


function Hello(){
    const [ON, setON] = useState(false);
    function isON(){
        setON(!ON);
        const value = document.getElementById('btn').textContent 
        value === 'ON'
        ? document.getElementById('btn').textContent = 'OFF' : document.getElementById('btn').textContent = 'ON'
    }
    return(
    <div className = 'container'>

        <h1>HOME</h1><br/>
        <button id = "btn" onClick = {isON}>ON</button><br/>
        {ON ? <h1>Welcome! Home</h1> : <h1>Please turn on the system.</h1>}
        {ON ?  <img width={35} alt="on" src ="\public\blub.jpg"/> 
        :<img width={35} alt="off" src ="\public\blub off.jpg"/>}
         {ON ?  <img width={35} alt="on" src ="\public\ventilation-system.gif"/> 
        :<img width={35} alt="off" src ="\public\fan.png"/>}

    </div>
    );
}
export default Hello;