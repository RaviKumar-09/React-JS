import React, {useState, useEffect} from "react";

function UseEffect(){
    const [count, setCount] = useState();
    const addCount = () =>{
        setCount(c => c + 1);

    }
    return(
        <>
        <p>Cont: {count}</p>
        <button onClick={addCount}>Add</button>
        </>
    );

}

export default UseEffect