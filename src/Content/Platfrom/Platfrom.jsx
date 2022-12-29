import React, { useState } from "react";
import Github from "./Github";
import CP from "./CP";
import "./platfrom.css";

function Platfrom() {
  const [show, setShow] = useState("git");

  const toggle = (name) => {
    console.log(name);
    setShow(name);
  };

  return (
    <div className="platfrom___contaner">
      <ul>
        <li onClick={(e) => toggle("git")}>
          <i className="fa-brands fa-github"></i>
          Github
        </li>
        <li onClick={(e) => toggle("cp")} className="tooltip">
          <i className="fa-solid fa-code "></i>
          Competitive Programming
          <span className="tooltiptext">commming soon...</span>
        </li>
      </ul>
      <div>
        <Github />
        {/* <CP/> */}
      </div>
      {/* <div>{show === "git" ? <Github /> : <CP />}</div> */}
    </div>
  );
}

export default Platfrom;
