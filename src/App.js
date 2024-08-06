import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import Contact from "./pages/Contact";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import About from "./pages/About";
import Services from "./pages/Services";
import Service from "./pages/Service";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();
  return (
    <div className="App font-roboto" dir={i18n.language=='ar'?'rtl':'ltr'}>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/services/:id" element={<Service/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/articles/:id" element={<Article/>} />
          <Route path="/articles" element={<Articles/>} />

        </Routes>
      </Router>
    </div>
   
  );
}

export default App;
