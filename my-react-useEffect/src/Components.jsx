import React ,{useState,useEffect} from "react";

function Components(){
const [count,setCount] = useState(0);

// be sure to place the use effect on the top of the function

// useEffect(()=>{
//     document.title = `Count ${count}`;
// });

// now it runs even before mounting the function
// for it to change only when function mounts add an empty array 

// useEffect(()=>{
//     document.title = `Count ${count}`;
// },[]);

// if we pasd the ocunt as an arguemnt in the array then only when the count value changes will the title chage alongside that 

function addCount(){
    setCount(c => c + 1);
}
// now useeffect is i can run a side code every time this funciton re renders 
return(<>
<p>Count : {count} </p>
<button onClick={addCount}>Add</button>
</>)
}
export default Components;