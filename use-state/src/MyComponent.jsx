import React, {useState} from "react"

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Ravi");
    }

    function IncrementAge() {
        setAge(age + 1);

    }

    const toggleEmployed = () =>{
        setIsEmployed(!isEmployed);
    }

        return(
            <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>

                <p>Name: {age}</p>
                <button onClick={IncrementAge}>Increment Age</button>

                <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
                <button onClick={toggleEmployed}>Increment Age</button>
                
            </div>
        );


}

export default MyComponent