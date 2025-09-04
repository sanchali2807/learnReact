import Students from "./Students"

function App() {
  return(
    <>
    {/* if you want tp send a data value which is not a string literal you need to enclose the data in curly brackets */}
    <Students name="Sanchali" age = {30} isStudent ={true}/>
    <Students name="Patrick" age={32} isStudent ={false}/>
    <Students/>
    </>
  );
}

export default App
