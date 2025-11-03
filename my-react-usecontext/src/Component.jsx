import ComponentA from "./ComponentA";
import React,{useState,createContext} from "react";

export const userContext = createContext();
function Component(){
    const [user,setUser] = useState("vaefgae");
    return(<>
<div className="box">
    <h1>component</h1>
    <h2>{`Hello ${user}`}</h2>
    <userContext.Provider value={user}>
    <ComponentA user={user}/>
    </userContext.Provider>
</div>
</>)
}
export default Component;