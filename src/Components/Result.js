import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from './Loading';




// 
export default function Result() {
    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(true);

    const getpackages = () => {

        axios.post('https://packages.foodtest.in/api/packages')

            .then(response => {
                setloading(false);
                setdata(response.data.data); // Handle the response data
                console.log(response.data.data)
            })

            .catch(error => {

                console.error('Error:', error); // Handle any errors

            });
    }
    useEffect(() => {
        getpackages()


    }, [])

    return (

        <div className='my-2'>
            {loading ? <Loading /> :


                <div className='grid grid-cols-1 gap-4 w-11/12 mx-auto md:grid-cols-3	 '>
                    {data.map((element, i) => {
                        return (
                    <div key={i} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition duration-500 cursor-pointe">
                        <a href="#" className='flex  items-center space-x-2 '>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{element[0].test_name}  </h5>
                            <span className='bg-gray-200 text-xs py-1 px-1 rounded shadow  text-dark font-bold'>{element[0].type}</span>
                          


                        </a>
                            
                        <p className="mb-3 my-2 font-normal text-gray-700 dark:text-gray-400">{element[0].reported}</p>

                    </div>
                    )
                })}







        </div>
            }


        </div >
    )
}
