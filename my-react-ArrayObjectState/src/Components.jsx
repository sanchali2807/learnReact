import React,{useState} from "react";

function Components(){
    const [cars,setCars] = useState([]);
    const [carYear,setYear] = useState(new Date().getFullYear());
    const [carMake,setCarMake] = useState("");
    const [model,setModel] = useState("");

    function handleAddCar(){

        const newCar = {year:carYear,
                        make:carMake,
                        model:model
                    }
        setCars(c => [...c,newCar]);              

    }
    function handleDeleteCar(index){

    }

    function handleYearChange(event){
        setYear(event.target.value);
    }

    function handleMakeChange(event){
        setCarMake(event.target.value);
    }

    function handleModelChange(event){
        setModel(event.target.value);
    }
    return(<>
    <div>
        <h2>List Of Car Objects</h2>
        <ul>
            {cars.map((car,index)=>
            <li key={index}>{car.year} {car.make} {car.model}</li>)}

        </ul>
        <input type="number" value={carYear} onChange={handleYearChange}/><br/>
        <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter car make"/><br/>
        <input type="text" value={model} onChange={handleModelChange} placeholder="Enter car model"/><br/>
        <button onClick={handleAddCar}>Add car</button>
    </div>
    
    </>)
}
export default Components;