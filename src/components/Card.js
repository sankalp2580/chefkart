import React from "react";
import { Viewlist } from "./Viewlist";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export const Card = () => {
  return (
    <>
      <div className="card">
        <div className="desc">
         <div className="star1">
         <h1 className="heading">Masala Muglai</h1>
          <small id='badge1'>&nbsp;4.2&nbsp;<FaStar  /></small>
         </div>
          <div id="kitchen">
            <span className="material-icons md-36">kitchen</span>
            <span className="material-icons md-36">kitchen</span>
            <span id="bar-line"></span>
            <h4>
              Ingrediants
              <Link to="/ingrediants" style={{textDecoration:"none"}} >
                <Viewlist />
              </Link>
            </h4>
          </div>
          <p className="text">
            Chicken fried in deep tomato sauce with delicious spices
          </p>
        </div>
        <div className="img-desc">
          <span className="f-img">
            <img src="images.jpg" className="card-img" alt={"muglai"} />
          </span>
          <div className="add">
            Add
            <sup>
              <b>&nbsp;&nbsp;&nbsp;&nbsp;+</b>
            </sup>
          </div>
        </div>
      </div>
    </>
  );
};
