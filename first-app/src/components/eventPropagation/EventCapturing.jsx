export default function CapturingExample() {
    const handleParentClick = () => {
      console.log("🔸 Parent Capturing");
    };
  
    const handleChildClick = () => {
      console.log("🔹 Child Clicked");
    };
  
    return (
      <div onClickCapture={handleParentClick} style={{ padding: 20, background: "#ddd" }}>
        <h3>Parent</h3>
        <button onClick={handleChildClick} style={{ padding: 10 }}>Click Me</button>
      </div>
    );
  }
  