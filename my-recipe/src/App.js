import React, { useState } from "react";
import Axios from "axios";
import "./App.css";

import { v4 as uuidv4 } from "uuid";
import Recipe from "./components/Recipe";
import Alert from "./components/Alert";

const App = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const APP_ID = "1c999786";
  const APP_KEY = "6f0457310adcf00c7cfbe5ad8746b21e";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      if (!result.data.more) {
        return setAlert("Excuse me are you dam? no such food name");
      }
      console.log(result);
      setRecipes(result.data.hits);
      setQuery("");
      setAlert("");
    } else {
      setAlert("Please fill the form Brother");
    }
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  // line 29: if the first part(not equal to empty array) is true then means we need to loop through the recipes array
  // get access to each recipe item and grab the value of the property
  // use the map insert a callback function the current item of the array
  return (
    <div className="App">
      <h1>Searching Food Recipe</h1>
      <form onSubmit={onSubmit} className="search-form">
          {alert !== "" && <Alert alert={alert}/>}
        <input
          type="text"
          placeholder="Search Food"
          autocomplete="off"
          onChange={onChange}
          value={query}
        />
        <input type="submit" value="search" />
      </form>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map((recipe) => <Recipe key={uuidv4()} recipe={recipe} />)}
      </div>
    </div>
  );
};

export default App;
