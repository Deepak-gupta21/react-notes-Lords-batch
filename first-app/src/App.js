import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import AboutUs from "./components/page1/Page1";
import ContactUs from "./components/page2/Page2";
import Gallery from "./components/page3/Page3";
import NotFound from "./components/notfound/NotFound";
import NotAuth from "./components/notfound/notauth";
import FormExample from "./components/form/Form";
import Example1 from "./components/useEffect/UseEffect";
import ExpensiveComponent from "./components/usememo/UseMemo";
import Counter from "./components/usecallback/Usecallback";
import Mounting from "./components/lifeCycleMethods/Mounting";
import Updating from "./components/lifeCycleMethods/Update";
import Unmounting from "./components/lifeCycleMethods/Unmounting";
import Mimic from './components/lifeCycleMethods/mimicBehaviour';
import FetchDataFunctional from "./components/fetchingData/Fetch";
import FetchWithAxios from './components/fetchingData/Axios';
import Display from './components/display/Display';

const App = () => {
  function PrivateRoute({ children }) {
    const isAuthenticated = false; // Change based on authentication logic
    return isAuthenticated ? children : <Navigate to="/not-authenticated" />;
  }

  return (
    <BrowserRouter>
      <nav>
        {/* <Link to="/contact">About Us</Link> |<Link to="/contact">Contact Us</Link>{" "}
        <Link to="/gallery">Gallery</Link> |<Link to="/form">open Form</Link>|
        <Link to="/useEffect1">useEffect 1</Link> | */}
       
        {/* <Link to="/Counter">useCallbackExample</Link> |
        <Link to="/ExpensiveComponent">useMemoExample</Link> 
        | */}
        <Link to="/Mounting">Mounting phase</Link> |
        <Link to="/Updating">Update phase</Link> |
        <Link to="/Unmounting">Unmounting phase</Link> |
        <Link to="/Mimic">Equivalent behaviour with useEffect() hook</Link> |
        <Link to="/FetchDataFunctional"> FetchDataFunctional</Link> |
        <Link to="/FetchWithAxios">  FetchWithAxios</Link> |
        <Link to="/Project">Display project</Link> |
       
       
        
      </nav>

      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route
          path="/contact"
          element={
            <PrivateRoute>
              <ContactUs />
            </PrivateRoute>
          }
        />
        <Route
          path="/gallery"
          element={
            <PrivateRoute>
              <Gallery />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/not-authenticated" element={<NotAuth />} />
        <Route path="/form" element={<FormExample />} />
        <Route path="/useEffect1" element={<Example1 />} />
        <Route path="/ExpensiveComponent" element={<ExpensiveComponent />} />
        <Route path="/Counter" element={<Counter />} />


        <Route path="/Mounting" element={<Mounting />} />
        <Route path="/Updating" element={<Updating />} />
        <Route path="/Unmounting" element={<Unmounting />} />
        <Route path="/Mimic" element={<Mimic />} />
        <Route path="/FetchDataFunctional" element={<  FetchDataFunctional />} />
        <Route path="/FetchWithAxios" element={<  FetchWithAxios />} />
        <Route path="/Project" element={<Display />} />




      
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
