import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import { GiLightningFrequency } from 'react-icons/gi';





// 
export default function Result({ fields, allpackages }) {
    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(true);

    // const packagesInclude =(packages, packageName) =>{
    //     for(let i of packages) {
    //         if(i.test_name.trim() === packageName.test_name.trim()){
    //             return false
    //         }
    //     }
    //     return true
    // }

    // const filteredata = () => {
    //     const b=[]
    //     const packages =[]
    //     let updatedfiltervaue = allpackages.map((elm) => {           
    //         for(let i of fields){
    //             const regex = new RegExp(i,"i")
    //             // console.log((elm.test_name).match(regex),regex ,elm.test_name)
    //             if((elm.test_name.trim()).match(regex)){
    //                 b.push(elm)
    //             }
    //             else if((elm.package).match(regex)){
    //                 if(packagesInclude(packages, elm)){
    //                     packages.push(elm)
    //                 }
    //             }
    //         }
    //     })

    //     b.sort((a,b)=>{
    //         return a.mrp  -  b.mrp;

    //     })

    //     // console.log(b);
    //     let totalAmount = 0
    //     b.forEach(element => {
    //         totalAmount += element.mrp
    //     });

    //     packages.forEach(element => {
    //         if(element.mrp < totalAmount){
    //             b.unshift(element)
    //         }
    //         else{
    //             b.push(element)
    //         }
    //     });

    //     setdata(b);

    // }


    const getfeilddata = async () => {
        
        try {
            const response = await axios.post('https://packages.foodtest.in/api/getsearchdata', {
                search: fields,
            });

            const apiData = response.data;
            console.log(apiData.data);
            setloading(false);

            setdata(apiData.data);
        } catch (error) {
            console.error('Error sending POST request or handling response:', error);
            // Handle the error, e.g., set an error state or display a message to the user
        }
    }
    useEffect(() => {

        // if (allpackages.length > 0) {
        //     setloading(false);
        // }

        // if(fields.length > 0){

        //     filteredata();

        // }else{
        //     setdata(allpackages);
        // }

        if (!fields.length) {
            setloading(false);

            setdata(allpackages)
        } else {

            getfeilddata();



        }

    }, [fields])



    return (

        <div className='my-2'>
            {loading ? <Loading /> :

                <div className='grid grid-cols-1 gap-4 w-11/12 overflow-hidden mx-auto md:grid-cols-3	 '>
                    {data.map((element, i) => {
                        return (
                            <div key={i} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition duration-500 cursor-pointe">
                                <a href="#" className='flex  items-center space-x-2 '>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{element.test_name}  </h5>
                                    <span className='bg-gray-200 text-xs py-1 px-1 rounded shadow  text-dark font-bold'>{element.type}</span>



                                </a>
                                <div className='flex    items-center '>
                                    <div className='flex bg-[#9fcc3a]  text-sm text-white  px-1 py-1 items-center  rounded shadow-lg gap-2'>
                                        <div> <GiLightningFrequency /> </div>
                                        <div> {element.frequency} </div>
                                    </div>

                                </div>


                                <p className="mb-3 my-2 font-normal text-gray-700 ">{element.reported}</p>
                                <p className="mb-3 my-2 font-normal text-gray-700 ">{element.special_instruction}</p>

                                <div className='flex flex-col space-y-2'>
                                    {element.synonyms ? <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded   border border-green-400">{element.synonyms}</span> : ''}
                                    {element.package ? <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded   border border-green-400">{element.package}</span> : ''}
                                </div>
                                <div className='flex justify-between  '>

                                    <div className='price font-bold text-xl'>₹ {element.mrp}</div>
                                    <div>
                                        <span class="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded shadow ">SRL: {element.srl_code}</span>

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
