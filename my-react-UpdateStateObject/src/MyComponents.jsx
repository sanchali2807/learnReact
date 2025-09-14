import React,{useState} from "react"

function MyComponents(){
    const [car,setCar] = useState({year:2024,make:"Ford",model:"Mustang"});

    function handleYearChange(e){
        // set our car to be js pbject
        // what we did was we changed the inital value from all three to just the year
        // setCar({...car,year:e.target.value});

        setCar(c=>({...c,year:e.target.value}));  



        // ...car means all the key value pair but we donot write like that beacuse jsx does not allow duplicate keys
        //like this even on changing the year the other values does not disappear
    }
    function handleMakeChange(e){
        setCar(c=>({...c,make:e.target.value}));
    }
    function handleModelChange(e){
         setCar(c=>({...c,modele:e.target.value}));
    }

return(<>
    <div>
        <p>Your favorite car is : {car.year} {car.make} {car.model}</p>
        <input type="number" value={car.year} onChange={handleYearChange}></input><br></br>
        <input type="text" value={car.make}  onChange={handleMakeChange}></input><br></br>
        <input type="text" value={car.model}  onChange={handleModelChange}></input>
    </div>
    </>);
}

export default MyComponents