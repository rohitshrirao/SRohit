import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import NotFound from "./components/not-found";
import './App.css';
import "font-awesome/css/font-awesome.min.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/resume" element={<Resume/>} />
        <Route path="/portfolio" element={<Portfolio/>} /> 
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
