import React, { useState } from "react";
import { favList } from "../../App";
import "./style.css";
import { ReactComponent as OUTLINESTAR } from "../../assets/star-solid.svg";
export default function FavoriteList() {
  console.log(favList);
  return (
    <div>
      {favList.map((m, i) => {
        return (
          
        <div key={i} className="container">
          <div className="wrapper">
            <img
              src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}
              style={{ width: "350px", height: "250px" }}
              alt=""
            />
            
            <h1>{m.original_title}</h1> 
              <p>{m.overview}</p>
              <OUTLINESTAR className="starimg" onClick={()=>console.log(favList[i])} />
          </div>
        </div>
        );
        
      })}
    </div>
  );
}
