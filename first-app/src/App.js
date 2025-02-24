import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import AboutUs from "./components/page1/Page1";
import ContactUs from "./components/page2/Page2";
import Gallery from "./components/page3/Page3";
import NotFound from "./components/notfound/NotFound";
import NotAuth from "./components/notfound/notauth";
import FormExample from './components/form/Form';
import Example1 from './components/useEffect/UseEffect';
import ExpensiveComponent from './components/usememo/UseMemo';
import Counter from './components/usecallback/Usecallback';


const App = () => {

  function PrivateRoute({ children }) {
    const isAuthenticated = false; // Change based on authentication logic
    return isAuthenticated ? children : <Navigate to="/not-authenticated" />;
  }

  return (
    <BrowserRouter>
      <nav>
        <Link to="/about">About Us</Link> | 
        <Link to="/contact">Contact Us</Link> | 
        <Link to="/gallery">Gallery</Link> | 
        <Link to="/form">open Form</Link>| 
        <Link to="/useEffect1">useEffect 1</Link> | 
        <Link to="/ExpensiveComponent">useMemo() hook</Link> | 
        <Link to="/Counter">usecallback exapmple</Link>| 
       
       
      </nav>

      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<PrivateRoute><ContactUs /></PrivateRoute>} />
        <Route path="/gallery" element={<PrivateRoute><Gallery /></PrivateRoute>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/not-authenticated" element={<NotAuth />} />
        <Route path="/form" element={<FormExample />} />
        <Route path="/useEffect1" element={  <Example1 />} />
        <Route path="/ExpensiveComponent" element={  < ExpensiveComponent />} />
        <Route path="/Counter" element={  < Counter />} />
        
      
      </Routes>
    </BrowserRouter>
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
