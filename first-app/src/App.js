import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
// Lazy Loading Components
const AboutUs = lazy(() => import("./components/page1/Page1"));
const ContactUs = lazy(() => import("./components/page2/Page2"));
const Gallery = lazy(() => import("./components/page3/Page3"));
const NotFound = lazy(() => import("./components/notfound/NotFound"));
const NotAuth = lazy(() => import("./components/notfound/notauth"));
const FormExample = lazy(() => import("./components/form/Form"));
const Example1 = lazy(() => import("./components/useEffect/UseEffect"));
const ExpensiveComponent = lazy(() => import("./components/usememo/UseMemo"));
const Counter = lazy(() => import("./components/usecallback/Usecallback"));
const Mounting = lazy(() => import("./components/lifeCycleMethods/Mounting"));
const Updating = lazy(() => import("./components/lifeCycleMethods/Update"));
const Unmounting = lazy(() => import("./components/lifeCycleMethods/Unmounting"));
const Mimic = lazy(() => import("./components/lifeCycleMethods/mimicBehaviour"));
const FetchDataFunctional = lazy(() => import("./components/fetchingData/Fetch"));
const FetchWithAxios = lazy(() => import("./components/fetchingData/Axios"));
// import Display from './components/display/Display';

const Display = lazy(() => import("./components/display/Display"));

const App = () => {
  function PrivateRoute({ children }) {
    const isAuthenticated = false; // Change based on authentication logic
    return isAuthenticated ? children : <Navigate to="/not-authenticated" />;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
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
          <Link to="/FetchWithAxios"> FetchWithAxios</Link> |
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
          <Route
            path="/FetchDataFunctional"
            element={<FetchDataFunctional />}
          />
          <Route path="/FetchWithAxios" element={<FetchWithAxios />} />
          <Route path="/Project" element={<Display />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
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
