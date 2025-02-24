import "./FirstComponent.css";
import image from "./logo192.png";
import PropTypes from "prop-types";
import {useState} from "react";

export default function First(props) {

 const [input , setInput ] = useState("");
  function greet(name) {
    alert(`Hello, ${name}!`);
    
  }


  function handleChange(event){
    console.log(event.target.value)
    setInput(event.target.value);
  }
  return (
    <div className="first">
      <img src={image} alt="logo_image" className="logo"></img>
      <p className="ptag">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        excepturi possimus ab porro quam! Quo, numquam fugiat? Ullam, fugit
        molestiae illum adipisci eos quaerat ex dolore porro repellat, deleniti
        ab.
      </p>
      <h1>{props.name}</h1>
      <h1>{props.college}</h1>
      <h1>{props.roll}</h1>
      <button onClick={() => greet("Deepak")}>Press me!</button>
      <input onChange={handleChange} />
      <h1>{input}</h1>
    </div>
  );
}

First.propTypes = {
  name: PropTypes.string.isRequired,
  college: PropTypes.string.isRequired,
  roll: PropTypes.string.isRequired,
};
