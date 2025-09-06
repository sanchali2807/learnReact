import List from "./List"
function App() {
  const fruits = [
    {id:1,name:"apple" ,calories: 95},
    {id:2,name:"orange",calories:45},
    {id:3,name:"banana",calories:105},
    {id:4,name:"cocunut",calories:159},
    {id:5,name:"pinapple",calories:37}
];

  const vegetables = [
    {id:6,name:"apple" ,calories: 95},
    {id:7,name:"orange",calories:45},
    {id:8,name:"banana",calories:105},
    {id:9,name:"cocunut",calories:159},
    {id:10,name:"pinapple",calories:37}
];
  return(<>
  {fruits.length > 0 ? <List items={fruits} category ={"fruits"}/> :
  <List items={vegetables} category ={"vegetabes"}
/> 
  }


  </>
);
  // print all one single string
}

export default App
