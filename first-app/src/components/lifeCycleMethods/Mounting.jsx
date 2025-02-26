import React from "react";

class LifeCycleExample extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
      console.log("Constructor - Component is initializing.");
    }
  
    static getDerivedStateFromProps(props, state) {
      console.log("getDerivedStateFromProps - Sync state with props if needed.");
      return null; // Return new state if needed
    }
  
    componentDidMount() {
      console.log("componentDidMount - Component is now in the DOM.");
      // API calls, event listeners can be set up here
    }
  
    render() {
      console.log("Render - Rendering JSX.");
      return <h1>Count: {this.state.count}</h1>;
    }
  }
  

  export default LifeCycleExample;