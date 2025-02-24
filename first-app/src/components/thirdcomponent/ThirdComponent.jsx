import React from "react";
import "./ThirdComponent.css";


export default function MyThird() {
  return (
    <div className="div_main">
    <label htmlFor="nameInput">Enter your name</label>
    <input id="nameInput" placeholder="enter here"></input>
    </div>
  );
}

// export --> is used to export hte fucntion from this file

// default ---> if i want to imort this fuc i can name it any thing
