import {  useEffect, useRef } from "react"

function MyComponent(){

    const imputref = useRef(null);
    /*console.log(ref)*/

    useEffect( function() {
        console.log("Conponent Render")

    })

    function handleClick() {
        /*ref.current++;*/
        /*console.log(ref.current)*/

    }

    return (<>
    
        <button onClick={handleClick}>Click me!</button>
        <br />
        <br />
        
        <input ref={imputref}/>

        </>);

}
export default MyComponent