import React from 'react'
import { FaRegClock } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export const Ingrediants = () => {
  return (
      <>
    <div className="main">

    <div className="head">
      <div className='star'>
      <h2> <strong>Masala Muglai</strong></h2>
      <small id='badge'>&nbsp;4.2&nbsp;<FaStar  /></small>
      </div>
      <p className="para">
        Muglai masala is a style of cookery developed in the Indian
        Subcontinent by the imperial kitchens of mughal empire.
      </p>
      <div className='herbs'>
      <img
          src="herbs.jpg"
          alt={"herbs"}
          id="herby-veg"
        />
      </div>
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
          <p className='vegy'>
            Cauliflower <span className='float'>01 pc</span>
          </p>
          <p className='vegy'>
            Tomato <span className='float'>10 pc</span>
          </p>
          <p className='vegy'>
            Spinach <span className='float'>1/2 kg</span>
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
            <p className='spice'>
              Corriander <span className='float'>100 gm</span>
            </p>
            <p className='spice'>
              Mustard oil <span className='float'>1/2 litre</span>
            </p>
          </div>
        </div>
        <div className='aplnc'>
        <h2><strong>Appliances</strong></h2>
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
