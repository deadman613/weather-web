import React, { useState } from "react";
import cloud from "../src/image/cloud.png";
import rain from "../src/image/rainy.png";
import mist from "../src/image/mist.png";
import clear from "../src/image/clear.png";
import haze from "../src/image/haze.png";
import snow from "../src/image/snow.png";



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
        setCity("");


    }



    return (
        <>
            <nav className="nab-bar   flex  flex-wrap   justify-between items-center  bg-black text-white  h-10  w-full rounded-2xl">
                <div><span className="text-white mx-10 py-2 text-xl "> Weather app</span></div>

                <ul className=" flex  gap-8 my-2">
                    <li className=" mx-10 "> Home</li>
                    <li className="mx-10">about</li>
                </ul>
            </nav>
            <div className='bg-black align-middle h-100 w-auto sm:w-auto    mx-100 my-20 rounded-2xl  ' id="web-container">
                <input type="text" onChange={handlechange} value={city} placeholder="Search any country.." className=" inputvalue ml-25 text-black absolute  h-10 w-auto bg-white rounded-2xl py-2 px-2 my-5 border-b-current" />

                <button onClick={fun} id="searchbtn" className=" text-amber-50 my-5  ml-80 rounded-2xl py-1 h-10 w-15 bg-amber-700">  search </button>

                <div id="showcase1" className="showcase  text-amber-50 relative mt-10 ml-30 flex justify-center  w-60 h-50  pt-5 ">
                    {
                        data && data.weather ? (
                            <div  >
                                <div>
                                    {/* <p className="">{city}</p> */}
                                    <p className="">{data.name}</p>
                                    <p className="mt-3">Temperature: {Math.trunc(data.main.temp)} °C</p>

                                    <img
                                        className="mt-3 h-10 w-20 rounded-2xl"
                                        src={
                                            data.weather[0]?.main === "Clouds"
                                                ? cloud
                                                : data.weather[0]?.main === "Rain"
                                                    ? rain
                                                    : data.weather[0]?.main === "Clear"
                                                        ? clear
                                                        : data.weather[0]?.main === "Mist"
                                                            ? mist
                                                            : data.weather[0]?.main === "Haze"
                                                                ? haze
                                                                : data.weather[0]?.main === "Snow"
                                                                ? snow
                                                                :""
                                        }
                                        alt="Weather Icon"
                                    />
                                    <p className="mt-3">Description: {data.weather[0]?.description}</p>

                                </div>

                            </div>) : "result"

                    }



                </div>
            </div>







        </>
    );

}

export default NavBar