import {  useEffect, useRef } from "react"

function MyComponent(){

    const ref = useRef(0);
    console.log(ref)

    useEffect( function() {
        console.log("Conponent Render")

    })

    function handleClick() {
        ref.current++;
        console.log(ref.current)

    }

    return (<>
    
        <button onClick={handleClick}>Click me!</button>
        <input />

        </>);

}
export default MyComponent