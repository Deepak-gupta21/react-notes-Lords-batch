import "./Project.css";
import img from "./logo192.png";

export default function Project() {
  return (
    <>
      <div className="header">
        <h1>Welcome to my portfolio, My name is Sohel !</h1>
      </div>
      <div className="main">
        <div className="left">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            temporibus consequatur quaerat nemo necessitatibus repellendus,
            natus, laboriosam et laudantium ipsam laborum ducimus perspiciatis
            vel! Suscipit corporis maiores esse omnis tenetur?
          </p>
        </div>
        <div className="right">
          <img src={img} alt="img" className="img"></img>
        </div>
      </div>
      <div className="footer"></div>
    </>
  );
}
