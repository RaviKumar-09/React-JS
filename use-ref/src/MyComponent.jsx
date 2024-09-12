import {  useEffect, useRef } from "react"

function MyComponent(){

    const inputref = useRef(null);
    /*console.log(ref)*/

    useEffect( function() {
        console.log("Conponent Render")

    });

    function handleClick() {
        /*ref.current++;*/
        /*console.log(ref.current)*/
        inputref.current.focus();
        inputref.current.style.backgroundColor = "red"

    };

    return (<>
    
        <button onClick={handleClick}>Click me 1</button>
        <br />
        <br />
        <input ref={inputref}/>
        <button onClick={handleClick}>Click me 2</button>
        <br />
        <br />
        <input ref={inputref}/>
        <button onClick={handleClick}>Click me 3</button>
        <br />
        <br />
        <input ref={inputref}/>


        </>);

};
export default MyComponent