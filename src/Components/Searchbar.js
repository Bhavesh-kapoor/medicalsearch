import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Searchbar({ fields, setFields, allpackages ,type ,setType }) {
  const [suggestionbox, setsuggestionbox] = useState(false);
  const [keywisesearch, setkeywisesearch] = useState([]);

  const handlesearchbarvalue = async (e) => {
    e.target.value == "" ? setsuggestionbox(false) : setsuggestionbox(true);

    if (e.key === "Enter") {
      if (e.target.value != "") {
        let v = fields.filter((elm) => {
          return elm == e.target.value.trim();
        });

        if (v.length == 0) {
          setFields([...fields, e.target.value.trim().toLowerCase()]);
          e.target.value = "";
        }
      }
    }

    if (e.target.value !== '') {
      const regex = new RegExp(e.target.value, 'i');

      try {
        const response = await axios.post('https://packages.foodtest.in/api/testsearch', {
          search: e.target.value,
        });

        const apiData = response.data;


        // Ensure that apiData is an array
        if (apiData && Array.isArray(apiData.data)) {
          setkeywisesearch(apiData.data);

          // const filteredData = apiData.data.filter((elm) => {
          //   const testName = elm.test_name && elm.test_name.toLowerCase();
          //   return testName && testName.match(regex) && testName.startsWith(e.target.value.toLowerCase());
          // });

          // filteredData.sort((a, b) => a.test_name.localeCompare(b.test_name));

          // setkeywisesearch(filteredData);

        } else {
          console.error('Invalid response format from the API:', apiData);
          // Handle the error, e.g., set an error state or display a message to the user
        }
      } catch (error) {
        console.error('Error sending POST request or handling response:', error);
        // Handle the error, e.g., set an error state or display a message to the user
      }
    }
  };


  const valuetobesended = (clickedvalue) => {
    let v = fields.filter((elm) => {
      return elm == clickedvalue.trim();
    });

    if (v.length == 0) {
      setFields([...fields, clickedvalue.trim()]);
      clickedvalue = "";
      const inputField = document.querySelector('input[type="text"]');
      if (inputField) {
        inputField.value = '';
      }
      // get the select box value 
      const selectBox = document.getElementById('type');
      const selectValue = selectBox ? selectBox.value : '';
  


    }

    setsuggestionbox(false);
  };

  const removearrayvalue = (e) => {
    setFields(
      fields.filter((elm) => {
        return elm != e;
      })
    );
  };
  return (
    <>
      {/* {[1].map((e)=>{
      for(let i=0; i<allpackages.length-1; i++){
        const testname = allpackages[i][0].test_name
        const regex = new RegExp(testname,"i")
        for(let j=0 ; j<allpackages.length-1; j++){
          if(((allpackages[j])[0].package).match(regex))
          console.log(allpackages[j], allpackages[i])
        }
      }
    })} */}
      <div className="flex justify-between mx-2">
        <div>
          <Link to="/">
            {" "}
            <div className="bg-white py-3 px-4 text-center shadow w-12">
              <AiOutlineArrowLeft style={{ fontSize: "1rem" }} />
            </div>
          </Link>
        </div>
        <div className="done">
          <Link to="/result">
            {" "}
            <p className="text-[#9fcc3a] font-bold">Done</p>{" "}
          </Link>
        </div>
      </div>

      <div className="my-2">
        <div className="maindiv">
          <div className="flex gap-2 flex-wrap mx-2">
            {fields.map((e, index) => {
              return (
                <div
                  key={index}
                  className="relative bg-[#9fcc3a] rounded-md text-sm py-1 px-1 cursor-pointer group/item hover:bg-green-500"
                  onClick={() => removearrayvalue(e)}
                >
                  <div className="absolute top-1 right-1 text-white group-hover/item:scale-150 group-hover/item:font-bold ">
                    X
                  </div>
                  <button className=" pr-5   rounded   text-white " key={index}>
                    {e}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative -my-3">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-1">
          <div className="col-span-3 my-4  md:col-span-3 w-full">

            <select id="type" name="type" onChange={(e)=>setType(e.target.value)} class=" py-3   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="1">Choose Search Type</option>
              <option value="1">Search on the behalf of  Test Only</option>
              <option value="2">Search on the behalf of  Test With Package</option>
             
            </select>
          </div>

          <div className="col-span-9 md:col-span-9 my-4 w-full relative">
            <BiSearch
              className="absolute translate-x-1 translate-y-3"
              style={{ fontSize: "1.5rem" }}
            />
            <input
              type="text"
              onKeyUp={handlesearchbarvalue}
              autoComplete="off"
              placeholder="Search Test Here"
              className="px-8 bg-gray-50 rounded focus:shadow focus:outline outline-1 outline-[#9fcc3a] w-full py-3"
            />
          </div>
        </div>
        {keywisesearch.length > 0 ? (
          suggestionbox &&
          keywisesearch.map((elm, i) => {
            //console.log(elm);
            return (
              <div
                key={i}
                className="cursor-pointer hover:bg-gray-200"
                onClick={() => valuetobesended(elm.test_name)}
              >
                <div className="bar ">
                  <div className="list-items  border-b-2 py-3 px-2 border-[#9fcc3a] flex  items-center  ">
                    {/* <div className="image">
                    <img src="images/healthogo.png" className="w-14" />
                  </div> */}

                    <div className="item mx-3 font-medium">
                      <div className="flex gap-2 items-center">
                        <p> {elm.test_name}</p>
                        <p className="font-bold px-2 py-1 bg-gray-300 rounded-full">₹{elm.mrp}</p>
                        <p className={`${elm.type === 'TEST' ? 'bg-green-700/25' : 'bg-purple-700/25'} rounded-full p-2 py-1 text-sm`}>
                          {elm.type}
                        </p>
                      </div>
                      <div>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>
            );
          })
        ) : (
          <div>
            <div className="bar ">
              <div className="list-items  border-b-2 py-3 px-2 border-[#9fcc3a] flex  items-center  ">
                {/* <div className="image">
                <img src="images/healthogo.png" className="w-14" />
              </div> */}

                <div className="item mx-3 font-medium">No Result Found</div>
              </div>
            </div>{" "}
          </div>
        )}
      </div>
    </>
  );
}
