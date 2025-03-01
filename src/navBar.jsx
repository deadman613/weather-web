import React, { useState } from "react";


function NavBar() {


    const API_KEY = "377806fcbb6665011f2305bb779fb929"
    const API = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
    const [city, setCity] = useState("");
    const [data, setData] = useState("");


    const handlechange = (event) => {
        setCity(event.target.value)
        console.log(event.target.value)

    }

    const fun = async () => {
        if (city) {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
                );
                const jsondata = await response.json();
                console.log('jsondata', jsondata);

                setData(jsondata);

            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        }
        if (city === '') {
            alert("Please! Enter a name of a particular city.")

        }
    }



    return (
        <>
            <nav className="nab-bar   flex justify-between  bg-black text-white  h-10  w-full rounded-2xl">
                <div><span className="text-white mx-10 py-2 text-xl "> Weather app</span></div>

                <ul className=" flex  gap-8 my-2">
                    <li className=" mx-10 "> Home</li>
                    <li className="mx-10">about</li>
                </ul>
            </nav>
            <div className='bg-black align-middle h-100 w-auto     mx-100 my-20 rounded-2xl  ' id="web-container">
                <input type="text" onChange={handlechange} placeholder="Search any country.." className=" inputvalue ml-25 text-black absolute  h-10 w-auto bg-white rounded-2xl py-2 px-2 my-5 border-b-current" />

                <button onClick={fun} id="searchbtn" className=" text-amber-50 my-5  ml-80 rounded-2xl py-1 h-10 w-15 bg-amber-700">  search </button>

                <div id="showcase1" className="showcase  text-amber-50 relative mt-30 ml-30 flex justify-center  w-60 h-90 ">
                    {
                        data && data.weather ? (
                            <div  >
                                <div>
                                    <p>{city}</p>
                                    <p>Temperature: {data.main.temp} c</p>
                                    <p>Description: {data.weather[0]?.description}</p>
                                </div>

                            </div>) : "result"

                    }



                </div>
            </div>







        </>
    );

}

export default NavBar