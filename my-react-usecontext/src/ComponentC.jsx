import React,{useContext} from "react";
import { userContext } from "./Component";
function ComponentC(){
    const user = useContext(userContext);
    return(<>
<div className="box">
    <h1>component c</h1>
    <h2>{`Bye ${user} `}</h2>
</div>
</>)
}
export default ComponentC;