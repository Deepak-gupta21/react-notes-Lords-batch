import React, { useEffect } from "react";

const TestComponent = () => {
  useEffect(() => {
    console.log("Component Mounted!");
  }, []);

  return <h1>Hello, React!</h1>;
};

export default TestComponent;
