import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Searchbar({fields,setFields}) {
    const [suggestionbox, setsuggestionbox] = useState(false);

    const handlesearchbarvalue = (e) => {

        e.target.value == '' ? setsuggestionbox(false) : setsuggestionbox(true);

        if (e.key === 'Enter') {
            if (e.target.value != '') {

            let v =   fields.filter((elm)=>{

                

                    return elm  ==e.target.value.trim() ;
                    
                });

                if(  v.length == 0){
                setFields([...fields, e.target.value.trim()])
                e.target.value = "";

                }

              





                
            }
        }



    }


    const removearrayvalue=(e)=>{
        setFields(fields.filter((elm)=>{

                

            return elm  !=e;
            
        }));


        
    }
    return (
        <>

            <div className='flex justify-between mx-2'>
                <div>
                    <Link to="/" > <div className='bg-white py-3 px-4 text-center shadow w-12'>
                        <AiOutlineArrowLeft style={{ fontSize: '1rem' }} />
                    </div></Link>

                </div>
                <div className='done'>
                 <Link  to="/">  <p className='text-[#9fcc3a] font-bold'>Done</p> </Link>
                </div>
            </div>

            <div className='my-2'>
                <div className='maindiv'>
                    <div className='flex gap-2 flex-wrap mx-2'>

                        {fields.map((e, index) => {
                            return <>
                                <div className='relative bg-[#9fcc3a] rounded-md text-sm py-1 px-1'>
                                    <div className='absolute top-1 right-1 text-white ' onClick={()=>removearrayvalue(e)}>
                                        X
                                    </div>
                                    <button className=' pr-5   rounded   text-white ' key={index}>{e}</button>
                                </div>


                            </>

                        })}

                    </div>

                </div>





            </div>

            <div className='relative -my-3'>
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
