import React, {useState} from 'react';

function MyComponents(){

    const [name,setName] = useState("Guest");
    const [age,setAge] = useState(0);
    const [isEmployed,setStatus] = useState(false);
    //
    // const updateName = () =>{
    //     name = "Spongebob";
    //     console.log(name);
    // }

    //when you use the setter funciton os usestate it will trigger every render for the virtual dom
    //normally variables do not
    const updateName = () => {
     setName("Spongebob");
    }
    const updateAge = () =>{
        setAge(age+1);
    }
    const updateStatus = ()=>{
        setStatus(!isEmployed);
    }
    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={updateAge}>increment age</button>

            <p>Status: {isEmployed ? "yes" : "no"}</p>
            <button onClick={updateStatus}>Change Status</button>
        </div>
    );

}

export default MyComponents