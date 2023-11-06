import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Getlaboratywisedata() {
    const {slug} = useParams();

    const [packages , setpackages] =  useState([]);

    const fetchlabwisedata=(slug)=>{

        // const result   = axios.post('',)

        console.log(slug);





    }

    useEffect(()=>{
        fetchlabwisedata(slug);

    },[slug]);


    


    
  return (
    <div>

    </div>
  )
}
