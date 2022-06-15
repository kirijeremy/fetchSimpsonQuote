import { useState } from "react";
import axios from "axios";

import DisplaySimpson from "./components/DisplaySimpson"

import './App.css';



function App() {
const [simpson, setSimpson] = useState(sampleSimpson[0]); 

const getQuote = () => {
  // Send the request
  axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes?count=1')
    // Extract the DATA from the received response
    .then((response) => response.data)
    // Use this data to update the state
    .then((data) => {
      //console.log(data);
      setSimpson(data[0]);
    });
};
  
  return (
    <div className="App" >
      <DisplaySimpson simpson={simpson} /> 
      <button type="button" onClick={getQuote} >Get quotes</button>
    </div>
  );
}

const sampleSimpson =    [
  {
  "quote": "By chilling my loins I increase the chances of impregnating my wife.",
  "character": "Apu Nahasapeemapetilon",
  "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  "characterDirection": "Left"
  }
]

;


export default App;
