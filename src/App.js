import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App font-roboto">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />

        </Routes>
      </Router>
    </div>
   
  );
}

export default App;
