import React from 'react'

export const Dropdown = () => {
  return (
    <>
<div id='drp-menu'>
<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id='drp1'>
    Recommended
  </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {/* <li className="dropdown-item">chicken</li>
        <li className="dropdown-item">mutton</li>
        <li className="dropdown-item">veg</li> */}
    </ul>
</div>
<button type="button" class="btn btn-dark" id='menu'>Menu</button>
</div>
   </>
  )
}

