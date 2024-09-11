import React, {useState, useEffect} from "react";

function UseEffect(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;

    },[]);

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