import React,{useState} from "react";

function Components(){
    const [foods,setFoods] = useState(["Apple","Orange","Banana"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        // take the value written in the input field
        document.getElementById("foodInput").value = "";
        // to clear the value after writing

        // setFoods([...foods,newFood]);

        // if we only write newFood array it will erase all the previous values in orderr fot it to add the value to the existing food array we iterate through the array by ...
        //however it is best practise to work with prev state and not woth curr state

        setFoods(f => [...f,newFood]);
    }
    function handleRemoveFood(index){
        setFoods(foods.filter((_,idx)=>idx!== index));
    }

    return(<>
    <div>
        <h2>List of foods</h2>
        <ul>
            {foods.map((food,index)=>
            <li key={index} onClick={()=>handleRemoveFood(index)}>
                {/* in order to pass arguemnts inside the javascript we use an empty arrow funciton */}
                {food}
                </li>
            )}
        </ul>
        <input type="text" id="foodInput" placeholder="Enter food name"></input>
        <button onClick={handleAddFood}>Add food</button>
    </div>
    </>)
}

export default Components;