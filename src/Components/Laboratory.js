import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import { Link } from 'react-router-dom';


  


export default function Laboratory({ laboratories }) {

    const [preloading, setpreloading] = useState(true);

    useEffect(() => {

        setTimeout(() => {
            setpreloading(false);

        }, 1000);


    }, [laboratories])
    return (
        <>
            {preloading ? <Loading /> :
                <>
                <h1 class=" text-center mb-4 text-4xl  my-3 font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white">All Laboratories</h1>
                <hr/>
                <div className='grid  md:grid-cols-3 my-3 mx-7 gap-3 '>

                {laboratories.map((elm, i) => {
                    return <div key={i} className='bg-[brown] rounded-lg shadow max-w-sm cursor-pointer' >
                        <div className='flex  items-center justify-center my-5 font-bold text-white uppercase'>
                           <Link to={`/laboratory/${elm[0].id}`}> <h1> {elm[0].school_name}</h1></Link>

                        </div>

                    </div>

                })}

            </div></>}
        </>





    )
}
