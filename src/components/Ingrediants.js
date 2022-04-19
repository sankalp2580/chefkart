import React from 'react'

export const Ingrediants = () => {
  return (
      <>
    <div className="main">
    <div className="head">
      <h2>Muglai Masala</h2>
      <p className="para">
        Muglai masala is a style of cookery developed in the Indian
        Subcontinent by the imperial kitchens of mughal empire.
        <img
          src="herbs.jpg"
          alt={"herbs"}
          className="herbs"
        />
      </p>
      <h3 id="hr"> 1 hour</h3>
    </div>
    <div>
      <h2>Ingrediants</h2>
      <p id="two">For 2 people</p>
    </div>
    <div id="drp-menu">
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="drp"
        >
          Vegetables (05)
        </button>
        <ul
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButton"
        ></ul>
        <div>
          <p>
            Cauliflower <span>01 pc</span>
          </p>
          <p>
            Tomato <span>10 pc</span>
          </p>
          <p>
            Spinach <span>1/2 kg</span>
          </p>
        </div>
      </div>

      <div id="drp-menu">
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
            <p>
              Corriander <span>100 gm</span>
            </p>
            <p>
              Mustard oil <span>1/2 litre</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <h2>Appliances</h2>
  </div>
  </>
);
}
