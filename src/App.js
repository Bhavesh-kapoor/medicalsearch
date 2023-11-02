import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Searchbar from "./Components/Searchbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Result from "./Components/Result";


function App() {

  const { pathname } = useLocation();
  const [cpathname, setcpathname] = useState(pathname);
  const [fields, setFields] = useState([]);


  useEffect(() => {
    setcpathname(window.location.pathname);
  }, [pathname])

  return (
    <>
      <div className="Mainsite">
        {cpathname == '/search' ? '' : <Navbar fields={fields} setFields={setFields} />}

        <Routes>
          <Route path="/" element={<Result />} />
          <Route path="/search" element={<Searchbar fields={fields} setFields={setFields} />} />
        </Routes>

      </div>
    </>
  );
}

export default App;
