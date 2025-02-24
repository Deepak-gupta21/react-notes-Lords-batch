import "./Page1.css";
import { useNavigate } from "react-router-dom";

function Page1() {
  const navigate = useNavigate();
  return (
    <div className="page1">
      <h1>MY page 1 : ABOUT US</h1>
      <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="img"></img>

      <div>
        <h2>Home Page</h2>
        <button onClick={() => navigate("/contact")}>Go to Contact</button>
      </div>
    </div>
  );
}

export default Page1;
