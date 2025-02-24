import "./Mydata.css";
import img from "../../project/logo192.png";

export default function Mydata() {
  return (
    <div className="project-container">
      <div className="div">
        <img className="img" alt="img" src={ img }></img>
      </div>
      <div className="div">
        <img className="img" alt="img"  src={ img }></img>
      </div>
      <div className="div">
        <img className="img" alt="img"  src={ img }></img>
      </div>
    </div>
  );
}

