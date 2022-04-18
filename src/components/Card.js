import React from 'react'

export const Card = () => {
  return (
      <>
<div className='card'>
    <h1 className='heading'>Masala Muglai</h1>
    <p className='text'>Chicken fried in deep tomato sauce with delicious spices</p>
    <span className='f-img'><img src="images.jpg" className="card-img" alt={"muglai"}/></span>
    <div className='add'>Add<sup><b>&nbsp;&nbsp;&nbsp;&nbsp;+</b></sup></div>
</div>
      </>
  )
}