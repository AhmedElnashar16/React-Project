import React, { useEffect, useState } from "react";
import "./style.css";
import { ReactComponent as SOLIDSTAR } from "../../assets/star-solid.svg";
import { Link } from "react-router-dom";


export default function Topbar({state}) {

  
  const [isActiveTab, setIsActive] = useState(1);
  return (
    <div className="topbar">
      <div className="favoriteList">
        <Link to="/favouritelist"><span>Favorite List</span></Link>
        <div className="star">
          <span>{state}</span>
          <SOLIDSTAR
            style={{
              width: "30px",
              height: "30px",
            }}
          />
        </div>
      </div>
      <ul>
        <li
          onClick={() => setIsActive(1)}
          style={
            isActiveTab === 1
              ? { borderBottom: "2px solid blue", color: "blue" }
              : null
          }
        >
          LOGIN
        </li>
        <li
          onClick={() => setIsActive(2)}
          style={
            isActiveTab === 2
              ? { borderBottom: "2px solid blue", color: "blue" }
              : null
          }
        >
          REGISTER
        </li>
      </ul>
    </div>
  );
}
