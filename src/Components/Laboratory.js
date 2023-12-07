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
                    <hr />
                    <div className='grid  md:grid-cols-4 my-3 mx-7 gap-3 '>

                        {laboratories.map((elm, i) => {
                            return <div key={i}  >
                               
                                <div class="p-3 m-1 w-80 bg-white shadow-md rounded-xl">
                                <Link to={`/laboratory/${elm[0].id}`}>   <picture class=" overflow-hidden block">
                                        <img
                                            class="hover:scale-125 ease-in duration-150"
                                            src={elm[0].image} />
                                        
                                    </picture>

                                    <h1 class="mt-4 mb-2 text-xl font-bold text-[#aed55c]" >{elm[0].school_name}</h1>
                                   
                                    </Link>
                                </div>

                            </div>


                        })}

                    </div></>}
        </>





    )
}
