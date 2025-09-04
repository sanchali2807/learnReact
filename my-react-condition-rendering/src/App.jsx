
import UserGreeting from "./UserGreeting";
function App() {
  return(
    <>
    <UserGreeting isLoggedIn = {false} username = "Sanchali" />
     <UserGreeting isLoggedIn = {true} username = "Sanchali" />
    </>
  );

}

export default App
