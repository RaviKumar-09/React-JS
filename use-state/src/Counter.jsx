import React, {useState} from "react";

function Counter(){

    const [count, setCount] = useState(0);
    const increment = () =>{
        setCount( count + 1);

    }
    const decrement = () =>{
        setCount( count - 1);

    }
    const reset = () =>{
        setCount(0);

    }

    
    return(
        <div className="counter-container">
            <p className="counter-dispyla">{count}</p>
            <button className = "Cunter-button" onClick={decrement}>Decrement</button>
            <button className = "Cunter-button" onClick={reset}>Reset</button>
            <button className = "Cunter-button" onClick={increment}>Increment</button>
        </div>
    );

}

export default Counter