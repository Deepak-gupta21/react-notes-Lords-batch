export default function ButtonList() {
    const handleButtonClick = (event) => {
      console.log(`Button Clicked: ${event.target.innerText}`);
    };
  
    return (
      <div onClick={handleButtonClick} style={{ padding: 20, background: "#ddd" }}>
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
      </div>
    );
  }
  