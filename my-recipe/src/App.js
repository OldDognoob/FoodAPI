import React from "react";
import Axios from 'axios';
import "./App.css";

const App = () => {
  const APP_ID = "1c999786";

  const APP_KEY ="6f0457310adcf00c7cfbe5ad8746b21e";

  const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
  const getData = async () => {
   const result = await Axios.get(url);

   console.log(result)
  }
  return (
    <div className="App">
      <h1 onClick={getData}>Searching Food Recipe</h1>
    </div>
  );
};

export default App;
