import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./components/page1/Page1";
import ContactUs from "./components/page2/Page2";
import Gallery from "./components/page3/Page3";
import NotFound from "./components/notfound/NotFound";
const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/about">About Us</Link> | 
        <Link to="/contact">Contact Us</Link> | 
        <Link to="/gallery">Gallery</Link>
      </nav>

      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;









































// import "./App.css";

// import Counter from "./components/counter/Counter";
// import Consiiton from './components/condition/Condition';
// import Mapping from './components/mapping/Mapping';
// import Check from './components/checker/Check';
// import Usereff from './components/usereff/Usereff';

// import ContextCheck from "./components/contextapi/Context";
// function App() {
//   return (
//     <>
//    <Counter/>
//    <Consiiton/>
//    <Mapping/>
//    <Check/>
//    <Usereff/>
//    <ContextCheck/>
//     </>
//   );
// }

// export default App;
