import React from "react";
import Github from "./Github";
import CP from "./CP";

import "./platfrom.css"
function Platfrom() {
  return (
    <div className="platfrom___contaner">
      <ul>
        <li>
          <i className="fa-brands fa-github"></i>Github
        </li>
        <li>
          <i class="fa-solid fa-code"></i>Competitive Programming
        </li>
      </ul>
      <div>
        {/* <Github/> */}
        <CP/>
      </div>
    </div>
  );
}

export default Platfrom;
