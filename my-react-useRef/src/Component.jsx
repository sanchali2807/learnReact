import React,{useState,useEffect,useRef} from "react";

function Component(){
    // let [number,setNumber] = useState(0);
    const reff = useRef(0);
    //curr value of ref to be 
    // console.log(ref);

    useEffect(() =>{
        console.log("renders");
    })

    function handleClick(){
        // setNumber(n => n + 1);
        reff.current.focus();
        }
return(<>
<button onClick={handleClick}>
    Click Me
</button>
<input ref={reff}/>
</>)
}
export default Component;