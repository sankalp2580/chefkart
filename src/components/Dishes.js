import React from 'react'

export const Dishes = () => {
  return (
    <>
    <h1>Popular Dishes</h1>                     
<ul className='round'>
    <li className='circle'>
        <img src="bir.jpg" alt ={"biryani"} className="active"/>
        <div className="text">
            <h3>Biryani</h3>
        </div>
    </li>
    <li className='circle'id='active1'>
        <img src="bir.jpg" alt ={"biryani"}/>
        <div className="text">
            <h3>Biryani</h3>
        </div>
    </li>
    <li className='circle'id='active2'>
        <img src="bir.jpg" alt ={"biryani"}/>
        <div className="text">
            <h3>Biryani</h3>
        </div>
    </li>
    <li className='circle'id='active3'>
        <img src="bir.jpg" alt ={"biryani"}/>
        <div className="text">
            <h3>Biryani</h3>
        </div>
    </li>
    <li className='circle'id='active4'>
        <img src="bir.jpg" alt ={"biryani"}/>
        <div className="text">
            <h3>Biryani</h3>
        </div>
    </li>
    <li className='circle'id='active5'>
        <img src="bir.jpg" alt ={"biryani"}/>
        <div className="text">
            <h3>Biryani</h3>
        </div>
    </li>
    <li className='circle'id='active6'>
        <img src="bir.jpg" alt ={"biryani"}/>
        <div className="text">
            <h3>Biryani</h3>
        </div>
    </li>
    <li className='circle'id='active7'>
        <img src="bir.jpg" alt ={"biryani"}/>
        <div className="text">
            <h3>Biryani</h3>
        </div>
    </li>
</ul>
    </>
  )
}
