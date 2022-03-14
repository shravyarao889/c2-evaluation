import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true); 
  return (
    <div className="App">
      {show?<Rentals/>:<AddHouse/>}
      <button className="toggleForm" onClick= {()=>{
        setShow(show? false:true)
      }}>{show?"Add House" : "Show Rentals"}
        {         /* Show text Add House or Show Rentals based on state */}
       
      </button>
      {/* Show component based on state */}
      <br />
    </div>
  );
}

export default App;