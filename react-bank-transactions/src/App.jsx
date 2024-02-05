import React from "react";
import Table from "./Table";
import Search from "./Search";
import AddButton from "./AddButton";


function App() {
  return (
    <>
      <div className="App">
        <Table />
      </div>

      <div className="App">
        <Search />
      </div>

      <div className="App">
        <AddButton />
      </div>
    </>
  );
}


export default App;
