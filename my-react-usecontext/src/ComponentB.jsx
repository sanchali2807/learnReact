import ComponentC from "./ComponentC";
import React,{useContext} from "react";
import { userContext } from "./Component";
function ComponentB(){
    const user = useContext(userContext);
    return(<>
<div className="box">
    <h1>component b</h1>
    <h2>{`hello again ${user}`}</h2>
    <ComponentC />
</div>
</>)
}
export default ComponentB;