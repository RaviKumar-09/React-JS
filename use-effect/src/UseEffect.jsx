import React, {useState, useEffect} from "react";

function UseEffect(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;

    },[count]);

    const addCount = () =>{
        setCount(c => c + 1);


    }
    const subCount = () =>{
        setCount(c => c - 1);


    }
    return(
        <>
        <p>Cont: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subCount}>Sub</button>

        </>
    );

}

export default UseEffect