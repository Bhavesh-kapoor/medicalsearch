import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import { GiLightningFrequency } from 'react-icons/gi';





// 
export default function Result({ fields, allpackages }) {
    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(true);


    const filteredata = () => {
        const b=[]
        let updatedfiltervaue = allpackages.map((elm) => {           
            for(let i of fields){
                const regex = new RegExp(i,"i")
                // console.log((elm[0].test_name).match(regex),regex ,elm[0].test_name)
                if((elm[0].test_name).match(regex) || (elm[0].package).match(regex)){
                    b.push(elm)
                }
            }
        })

        b.sort((a,b)=>{
            return a[0].mrp  -  b[0].mrp;

        })

        // console.log(b);

        setdata(b);

    }

    useEffect(() => {

        if (allpackages.length > 0) {
            setloading(false);
        }

        if(fields.length > 0){
            
            filteredata();

        }else{
            setdata(allpackages);
        }



    }, [allpackages])



    return (

        <div className='my-2'>
            {loading ? <Loading /> :


                <div className='grid grid-cols-1 gap-4 w-11/12 overflow-hidden mx-auto md:grid-cols-3	 '>
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







                </div>
            }


        </div >
    )
}
