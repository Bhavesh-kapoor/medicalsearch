import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Searchbar({ fields, setFields, allpackages }) {
    const [suggestionbox, setsuggestionbox] = useState(false);
    const [keywisesearch, setkeywisesearch] = useState([]);

    const handlesearchbarvalue = (e) => {

        e.target.value == '' ? setsuggestionbox(false) : setsuggestionbox(true);

        if (e.key === 'Enter') {
            if (e.target.value != '') {

                let v = fields.filter((elm) => {



                    return elm == e.target.value.trim();

                });

                if (v.length == 0) {
                    setFields([...fields, e.target.value.trim().toLowerCase()])
                    e.target.value = "";

                }








            }
        }



        if (e.target.value != '') {
            let updatedvaue = allpackages.filter((elm) => {
                return elm[0].test_name.toLowerCase().includes(e.target.value.toLowerCase());

            });

            setkeywisesearch(updatedvaue);

        }




    }

    const  valuetobesended=(clickedvalue)=>{

            let v = fields.filter((elm) => {



                return elm == clickedvalue.trim();

            });

            if (v.length == 0) {
                setFields([...fields, clickedvalue.trim()])
                clickedvalue = "";

            }

            setsuggestionbox(false);






        
    }


    const removearrayvalue = (e) => {
        setFields(fields.filter((elm) => {



            return elm != e;

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
                    <Link to="/result">  <p className='text-[#9fcc3a] font-bold'>Done</p> </Link>
                </div>
            </div>

            <div className='my-2'>
                <div className='maindiv'>
                    <div className='flex gap-2 flex-wrap mx-2'>

                        {fields.map((e, index) => {
                            return (
                                <div key={index} className='relative bg-[#9fcc3a] rounded-md text-sm py-1 px-1 cursor-pointer group/item hover:bg-green-500' onClick={() => removearrayvalue(e)}>
                                    <div className='absolute top-1 right-1 text-white group-hover/item:scale-150 group-hover/item:font-bold ' >
                                        X
                                    </div>
                                    <button className=' pr-5   rounded   text-white ' key={index}>{e}</button>
                                </div>


                            )

                        })}

                    </div>

                </div>





            </div>

            <div className='relative -my-3'>
                <div className='my-4 w-full relative '>
                    <BiSearch className='absolute translate-x-1 translate-y-3' style={{ fontSize: '1.5rem' }} />
                    <input type='text' onKeyUp={handlesearchbarvalue} autoComplete='off' placeholder='Search Test Here' className=' px-8 bg-gray-50 rounded  focus:shadow focus:outline outline-1 outline-[#9fcc3a]  w-full py-3' />

                </div>
                {keywisesearch.length > 0 ? suggestionbox  && keywisesearch.map((elm, i) => {

                    return <div key={i} className='cursor-pointer hover:bg-gray-200'  onClick={()=>valuetobesended(elm[0].test_name)}>
                        <div className='bar '>
                            <div className='list-items  border-b-2 py-3 px-2 border-[#9fcc3a] flex  items-center  '>
                                <div className='image'>
                                    <img src='images/healthogo.png' className='w-14' />

                                </div>

                                <div className='item mx-3 font-medium' >
                                    {elm[0].test_name}

                                </div>


                            </div>


                        </div> </div>

                })

                : 
                <div >
                <div className='bar '>
                    <div className='list-items  border-b-2 py-3 px-2 border-[#9fcc3a] flex  items-center  '>
                        <div className='image'>
                            <img src='images/healthogo.png' className='w-14' />

                        </div>

                        <div className='item mx-3 font-medium'>
                        No Result Found

                        </div>


                    </div>


                </div> </div>
                }

















            </div>

        </>
    )
}
