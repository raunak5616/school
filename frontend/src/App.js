import React from "react";
import AddSchool from "./components/AddSchool";
import ShowSchools from "./components/ShowSchool";

function App() {
  return (
    <div className="min-h-screen p-5 bg-gray-50">
      <AddSchool />
      <ShowSchools />
    </div>
  );
}

export default App;
