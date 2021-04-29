import React, {useState} from "react";
import Axios from 'axios';
import "./App.css";

const App = () => {
    const[query,setQuery] = useState("");

  const APP_ID = "1c999786";

  const APP_KEY ="6f0457310adcf00c7cfbe5ad8746b21e";

  const url = `https://api.edamam.com/search?q=${query}app_id=${APP_ID}&app_key=${APP_KEY}`;
  
  const getData = async () => {
   const result = await Axios.get(url);

   console.log(result);
  };

  const onChange = (e) => {
      setQuery(e.target.value);
  };

  const onSubmit = e => {
  e.preventDefault();
  getData();
  };


  return (
    <div className="App">
      <h1>Searching Food Recipe</h1>
      <form className="search-form">
          <input type="text" placeholder="Search Food" autocomplete="off" onChange={onChange}/>
          <input type="submit" value="search"/>
      </form>
    </div>
  );
};

export default App;
