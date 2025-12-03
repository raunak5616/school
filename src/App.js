import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddSchool from "./frontend/AddSchool";
import ShowSchools from "./frontend/ShowSchool";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddSchool />} />
        <Route path="/schools" element={<ShowSchools />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
