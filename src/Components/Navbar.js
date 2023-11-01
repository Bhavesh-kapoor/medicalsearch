import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';



export default function Navbar() {

  return (
    <div className='Navbar flex  justify-between items-center  shadow h-14   bg-white p-2'>
      <div  className='Logo'>
            <img src='images/healthogo.png' className='w-24'/>

        </div>

        <div  className='Logo '>
        <Link to='/search'  >   <BiSearch  style={{ fontSize: '1.5rem' }} /> </Link>

        </div>
            
      
    </div>
  )
}
