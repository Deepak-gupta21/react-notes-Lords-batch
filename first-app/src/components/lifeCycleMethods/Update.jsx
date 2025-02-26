import React from "react";

class UpdatingExample extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }
  
    shouldComponentUpdate(nextProps, nextState) {
      console.log("shouldComponentUpdate - Deciding whether to re-render.");
      return true; // Returning false stops re-rendering
    }
  
    getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log("getSnapshotBeforeUpdate - Capturing state before update.");
      return null;
    }
  
    componentDidUpdate(prevProps, prevState) {
      console.log("componentDidUpdate - Component updated!");
    }
  
    render() {
      console.log("Render - Re-rendering JSX.");
      return (
        <div>
          <h1>Count: {this.state.count}</h1>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Increase Count
          </button>
        </div>
      );
    }
  }
  

  export default UpdatingExample;