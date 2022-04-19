import React from 'react'
import { FaRegClock } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export const Ingrediants = () => {
  return (
      <>
    <div className="main">

    <div className="head">
      <div className='star'>
      <h2>Muglai Masala</h2>
      <small id='badge'>&nbsp;4.2&nbsp;<FaStar  /></small>
      </div>
      <p className="para">
        Muglai masala is a style of cookery developed in the Indian
        Subcontinent by the imperial kitchens of mughal empire.
      </p>
      <img
          src="herbs.jpg"
          alt={"herbs"}
          className="herbs"
        />
      <h3 id="hr"><span className='current' id='clcks'><FaRegClock  size = "25px" /></span >&nbsp;&nbsp;<b>1 hour</b></h3>
    </div>


    <div className='indg'>
      <h2>Ingrediants</h2>
      <h4 id="two">For 2 people</h4>
    </div>



    <div className="vegetabels" id="drp-menu">
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="drp"
        >
          Vegetabels (05)
        </button>
        <ul
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButton"
        ></ul>
        <div>
          <p id='vegy'>
            Cauliflower <span>01 pc</span>
          </p>
          <p id='vegy'>
            Tomato <span>10 pc</span>
          </p>
          <p id='vegy'>
            Spinach <span>1/2 kg</span>
          </p>
        </div>
      </div>


      <div className="spices" id="drp-menu">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="drp"
          >
            Spices (10)
          </button>
          <ul
            className="dropdown-menu"
            aria-labelledby="dropdownMenuButton"
          ></ul>
          <div>
            <p id='spice'>
              Corriander <span>100 gm</span>
            </p>
            <p id='spice'>
              Mustard oil <span>1/2 litre</span>
            </p>
          </div>
        </div>
        <div className='aplnc'>
        <h2>Appliances</h2>
        <div id='ref'><img src="refg.jpg" alt={"fridge"} /></div>
        <div id='ref'><img src="refg.jpg" alt={"fridge"} /></div>
        <div id='ref'><img src="refg.jpg" alt={"fridge"} /></div>
        </div>
      </div>
    </div>
  </div>
  </>
);
}
