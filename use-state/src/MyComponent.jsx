import React, {useState} from "react"

function MyComponent(){

    const [name, setName] = useState("Guest");

    const [age, setAge] = useState(0);

    const updateName = () => {
        setName("Ravi");
    }

    function IncrementAge() {
        setAge(age + 1);


        
    }

        return(
            <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>

                <p>Name: {age}</p>
                <button onClick={IncrementAge}>Increment Age</button>
            </div>
        );


}

export default MyComponent