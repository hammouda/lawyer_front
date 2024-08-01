import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import Contact from "./pages/Contact";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import About from "./pages/About";
import Services from "./pages/Services";
import Service from "./pages/Service";

function App() {
  return (
    <div className="App font-roboto">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/services/:id" element={<Service/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/articles/1" element={<Article/>} />
          <Route path="/articles" element={<Articles/>} />

        </Routes>
      </Router>
    </div>
   
  );
}

export default App;
