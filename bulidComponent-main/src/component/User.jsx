import { useState } from "react";
const User=({name})=>{
    //creating multiple state variable
    const [count, setCount]=useState(0);
    return(
        <div className="user-card">
            <h2>count: {count}</h2>
            <button onClick={()=>{
                setCount(count+1);
            }}>increment</button>
            <h1>Function:Name {name}</h1>
            <h2>location:</h2>
            <h2>Contact</h2>
        </div>
    )
}
export default User;
