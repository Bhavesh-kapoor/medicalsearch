import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi';



export default function Navbar() {

  return (
    <div className='Navbar flex  justify-between items-center  shadow h-14   bg-white p-2'>
      <div  className='Logo'>
            <img src='images/healthogo.png' className='w-24'/>

        </div>

        <div  className='Logo '>
            <BiSearch  style={{ fontSize: '1.5rem' }} />

        </div>
            
      
    </div>
  )
}
