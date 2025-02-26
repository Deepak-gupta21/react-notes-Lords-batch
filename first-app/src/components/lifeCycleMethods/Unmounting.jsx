import React from "react";

export default class UnmountingExample extends React.Component {
    componentWillUnmount() {
      console.log("componentWillUnmount - Cleaning up before removal.");
      // Cleanup tasks like clearing timers, removing event listeners
    }
  
    render() {
      return <h1>Component is unmounted.</h1>;
    }
  }
