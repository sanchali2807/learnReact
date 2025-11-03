import ComponentB from "./ComponentB";
function ComponentA(){
    return(<>
<div className="box">
    <h1>component A</h1>
    <ComponentB/>
</div>
</>)
}
export default ComponentA;