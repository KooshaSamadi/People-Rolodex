import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
function App() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setPeople(() => data));
  }, []);

  //Variables
  const [people, setPeople] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  // functions
  const searchHandler = (event) => {
    setSearchValue(() => event.target.value.toLocaleLowerCase());
  };
  const filteredPeople = people.filter((person) =>
    person.name.toLocaleLowerCase().includes(searchValue)
  );

  return (
    <div className="App">
      <h1 className="app-title">People Rolodex</h1>
      <SearchBox
        onChangeHandler={searchHandler}
        placeholder={"Search People"}
        className={"search-box"}
      />
      <CardList filteredPeople={filteredPeople} />
    </div>
  );
}

export default App;
