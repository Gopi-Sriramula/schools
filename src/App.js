import {HashRouter, Route, Routes } from "react-router-dom";
import AddSchool from "./pages/AddSchool";
import "./index.css";
import ShowSchools from "./pages/ShowSchools";
import AboutSchool from "./pages/AboutSchool";
const App = function () {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/addSchool" element={<AddSchool />} />
          <Route path="/" element={<ShowSchools />} />
          <Route path="/showSchools/:id" element={<AboutSchool/>} />
        </Routes>
      </HashRouter>
    </div>
  );
};
export default App;
