function Button(){

    // const handleCLick = ()=> console.log("OUCH!");
    // let count = 0;
    // const handleCLick = (name) =>{
    //     if(count<3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} times.`);
    //     }else{
    //         console.log(`${name} Stop`)
    //     }
    // }
    const handleCLick = (e) => e.target.textContent = "OOUCH!";
    return(
        <>
        <button onClick={(e)=>handleCLick(e)}>CLiCk me</button>
        </>
    );
//     const handleClick2 = (name) => console.log(`${name} stop clicking me`);
// return(
//     <button onClick={()=>handleClick2("brocode")}>Click me</button>
    // if we pass parameters in paranthesis then the function will be envoked right away even without that specific event occuring
    // so we need to wrap that function with either a new fucntion or by arrow function 
// );
}

export default Button