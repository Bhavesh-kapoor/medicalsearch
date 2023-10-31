import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi';

export default function Searchbar() {
    const [suggestionbox, setsuggestionbox] = useState(false);

    const handlesearchbarvalue = (e) => {

        e.target.value == '' ? setsuggestionbox(false) : setsuggestionbox(true);

    }
    return (
        <>
            <div className='relative'>
                <div className='my-4 w-full relative '>
                    <BiSearch className='absolute translate-x-1 translate-y-3' style={{ fontSize: '1.5rem' }} />
                    <input type='text' onKeyUp={handlesearchbarvalue} autoComplete='off' placeholder='Search Test Here' className=' px-8 bg-gray-50 rounded  focus:shadow focus:outline outline-1 outline-[#9fcc3a]  w-full py-3' />

                </div>

                {suggestionbox ? <div className=' -translate-y-[0.80rem] absolute w-full  bg-gray-50 rounded'>
                    <div className='bar '>
                        <div className='list-items  border-b-2 py-3 px-2 border-[#9fcc3a] flex  items-center  '>
                            <div className='image'>
                                <img src='images/healthogo.png' className='w-14' />

                            </div>

                            <div className='item mx-3 font-medium'>
                                Har

                            </div>


                        </div>
                        <div className='list-items  border-b-2 py-3 px-2 border-[#9fcc3a] flex  items-center  '>
                            <div className='image'>
                                <img src='images/healthogo.png' className='w-14' />

                            </div>

                            <div className='item mx-3 font-medium'>
                                Har

                            </div>


                        </div>
                        <div className='list-items  border-b-2 py-3 px-2 border-[#9fcc3a] flex  items-center  '>
                            <div className='image'>
                                <img src='images/healthogo.png' className='w-14' />

                            </div>

                            <div className='item mx-3 font-medium'>
                                Har

                            </div>


                        </div>


                    </div>






                </div>
                    : ''}
            </div>

        </>
    )
}
