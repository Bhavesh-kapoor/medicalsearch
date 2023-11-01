import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Searchbar from "./Components/Searchbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";


function App() {

  const { pathname } = useLocation();
  const [cpathname, setcpathname] = useState(pathname);


  useEffect(() => {
    setcpathname(window.location.pathname);
  }, [pathname])

  return (
    <>
      <div className="Mainsite">
        {cpathname == '/search' ? '' : <Navbar />}

        <Routes>
          <Route path="/search" element={<Searchbar />} />
        </Routes>

      </div>
    </>
  );
}

export default App;
