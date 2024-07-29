import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";

function App() {
  return (
    <div className="App font-roboto">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
