import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import Contact from "./pages/Contact";
import Article from "./pages/Article";
import Articles from "./pages/Articles";

function App() {
  return (
    <div className="App font-roboto">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/articles/1" element={<Article/>} />
          <Route path="/articles" element={<Articles/>} />

        </Routes>
      </Router>
    </div>
   
  );
}

export default App;
