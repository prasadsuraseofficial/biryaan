import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Terms } from "./pages";
import Franchise from "./pages/Franchise";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </div>
  );
}

export default App;
