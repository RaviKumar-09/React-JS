import {  useEffect, useRef } from "react"

function MyComponent(){

    const ref = useRef(0);

    useEffect( function() {
        console.log("Conponent Render")

    })

    function handleClick() {
        ref.current++;
        console.log(ref.current)

    }

    return (
    
        <button onClick={handleClick}>Click me!</button>

    );

}
export default MyComponent