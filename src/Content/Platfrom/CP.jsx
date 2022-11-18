import React from "react";

import codeChef from '../../Assets/codechef.svg'
import leetCode from '../../Assets/leetcode.svg'

function CP() {
  return (
    <div className="cp">
      <div className="cp___card">
        <div className="cp___card--top">
            <div className="cp___card--top___image">
            <img src={leetCode} alt="" />
            </div>
            <div className="cp___card--top___detail">
                <h1>50000000</h1>
                <p>Rank</p>
                <h4>Problems Solved: <span>250</span></h4>
            </div>
        </div>
        <div className="cp___card--bottom">
          <ul>
            <li>
              <h5><span>1500</span>/3000</h5>
              <p>Easy Question</p>
            </li>
            <li>
              <h5><span>1500</span>/3000</h5>
              <p>Medium Question</p>
            </li>
            <li>
              <h5><span>1500</span>/3000</h5>
              <p>Hard Question</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="cp___card">
        <div className="cp___card--top">
            <div className="cp___card--top___image">
            <img src={codeChef} alt="" />
            </div>
            <div className="cp___card--top___detail">
                <h1>2*</h1>
                <p>Star</p>
                <h4>Current Ranking: <span>250</span></h4>
            </div>
        </div>
        <div className="cp___card--bottom">
          <ul>
            <li>
              <h5><span>5000</span>/3000</h5>
              <p>Highest Rating</p>
            </li>
            <li>
              <h5><span>10000</span>/3000</h5>
              <p>Country Rank</p>
            </li>
            <li>
              <h5><span>24000</span>/3000</h5>
              <p>Global Rank</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CP;
