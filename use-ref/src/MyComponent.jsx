import {  useEffect, useRef } from "react"

function MyComponent(){

    const inputref1 = useRef(null);
    const inputref2 = useRef(null);
    const inputref3 = useRef(null);
    
    
    /*console.log(ref)*/

    useEffect( function() {
        console.log("Conponent Render")

    });

    function handleClick1() {
        /*ref.current++;*/
        /*console.log(ref.current)*/
        inputref1.current.focus();
        inputref1.current.style.backgroundColor = "orange"
        inputref2.current.style.backgroundColor = ""
        inputref3.current.style.backgroundColor = ""

    };

    function handleClick2() {
        inputref2.current.focus();
        inputref1.current.style.backgroundColor = ""
        inputref2.current.style.backgroundColor = "white"
        inputref3.current.style.backgroundColor = ""


    };

    function handleClick3() {
        inputref3.current.focus();
        inputref1.current.style.backgroundColor = ""
        inputref2.current.style.backgroundColor = ""
        inputref3.current.style.backgroundColor = "green"

    };

    return (<>
    
        <button onClick={handleClick1}>Click me 1</button>
        <br />
        <br />
        <input ref={inputref1}/>
        <br />
        <br />
        <button onClick={handleClick2}>Click me 2</button>
        <br />
        <br />
        <input ref={inputref2}/>
        <br />
        <br />
        <button onClick={handleClick3}>Click me 3</button>
        <br />
        <br />
        <input ref={inputref3}/>


        </>);

};
export default MyComponent