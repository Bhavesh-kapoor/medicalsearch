import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Searchbar from "./Components/Searchbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Result from "./Components/Result";

import axios from 'axios';
import Laboratory from "./Components/Laboratory";
import Getlaboratywisedata from "./Components/Getlaboratywisedata";

function App() {

  const { pathname } = useLocation();
  const [cpathname, setcpathname] = useState(pathname);
  const [fields, setFields] = useState([]);
  const [type, setType] = useState(1);
  const [laboratories, setlaboratires] = useState([]);
  const [allapifetcheddata, setallapifetcheddata] = useState([]);

  const getpackages = () => {

    axios.post('https://packages.foodtest.in/api/packages')

      .then(response => {
        setallapifetcheddata(response.data.data); // Handle the response data

      })
      .catch(error => {

        console.error('Error:', error); // Handle any errors

      });
  }

  const getlaboratories = () => {
    axios.post('https://packages.foodtest.in/api/laboratories').then((response) => {

    setlaboratires(response.data.data);
    
    }).catch((error)=>{
      console.log('error',error);
    })
  }
  useEffect(() => {
    getpackages()
    getlaboratories();


  }, [])

  useEffect(() => {
    setcpathname(window.location.pathname);
  }, [pathname])

  return (
    <>
      <div className="Mainsite">
        {cpathname == '/search' ? '' : <Navbar fields={fields} setFields={setFields} />}

        <Routes>
          <Route path="/" element={<Laboratory laboratories={laboratories} />} />
          <Route path="/laboratory/:id" element={<Getlaboratywisedata/>} />
          <Route path="/result" element={<Result fields={fields} allpackages={allapifetcheddata}  type={type}/>} />
          <Route path="/search" element={<Searchbar fields={fields} setFields={setFields} allpackages={allapifetcheddata} type={type} setType={setType} />} />
        </Routes>

      </div>
    </>
  );
}

export default App;
