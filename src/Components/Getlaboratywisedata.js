import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from './Loading';

import { GiLightningFrequency } from 'react-icons/gi';


export default function Getlaboratywisedata() {
  const { id } = useParams();

  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);

  const fetchlabwisedata = async (id) => {
    const resdata = await fetch('https://packages.foodtest.in/api/getlabwise', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body:JSON.stringify( {
        'school_id' : id
      })
    })
    const jsonData = await resdata.json();
    if (jsonData.code == 200) {
      setdata(jsonData.data);
        setloading(false);
    }
  }

  useEffect(() => {
    fetchlabwisedata(id);
  }, [id]);


  return (
    <div className='my-2'>
      {loading ? <Loading/> : <> {data.length > 0 ? <><div className='grid grid-cols-1 gap-4 w-11/12 overflow-hidden mx-auto md:grid-cols-3	'>
                    {data.map((element, i) => {
                        return (
                            <div key={i} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition duration-500 cursor-pointe">
                                <a href="#" className='flex  items-center space-x-2 '>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{element[0].test_name}  </h5>
                                    <span className='bg-gray-200 text-xs py-1 px-1 rounded shadow  text-dark font-bold'>{element[0].type}</span>
                                </a>
                                <div className='flex    items-center '>
                                    <div className='flex bg-[#9fcc3a]  text-sm text-white  px-1 py-1 items-center  rounded shadow-lg gap-2'>
                                        <div> <GiLightningFrequency /> </div>
                                        <div> {element[0].frequency} </div>
                                    </div>
                                </div>
                                <p className="mb-3 my-2 font-normal text-gray-700 ">{element[0].reported}</p>
                                <p className="mb-3 my-2 font-normal text-gray-700 ">{element[0].special_instruction}</p>
                                <div className='flex flex-col space-y-2'>
                                    {element[0].synonyms ? <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded   border border-green-400">{element[0].synonyms}</span> : ''}
                                    {element[0].package ? <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded   border border-green-400">{element[0].package}</span> : ''}
                                </div>
                                <div className='flex justify-between  '>
                                    <div className='price font-bold text-xl'>₹ {element[0].mrp}</div>
                                    <div>
                                        <span class="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded shadow ">SRL: {element[0].srl_code}</span>

                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div></> :                 <h1 class=" text-center mb-4 text-4xl  my-3 font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white">No Package Found !</h1>
}
      </>}
    </div>
  )
}
