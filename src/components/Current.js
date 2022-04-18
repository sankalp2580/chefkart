import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";


export const Current = () => {
  return (
    <>
    <div className='time-date'>
      <span className='current' id='clndr'><FaCalendarAlt size = "25px"  /><b>&nbsp;20 April 2022 </b></span>
      <span id='line'></span>
      <span className='current' id='clck'><FaRegClock  size = "25px" /><b>&nbsp;10:30 Pm - 12:30 Pm</b></span>
    </div>
    </>
  )
}
