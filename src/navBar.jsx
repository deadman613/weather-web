import React, { userState } from "react";


function NavBar() {


    const API_KEY = "377806fcbb6665011f2305bb779fb929"     
    const API = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&lang={lang}"
    const [city, setCity] = userState("");


const handlechange= (event)=> {
    setCity(event.target.value)
    console.log(event.target.value)

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
        <div className='bg-black align-middle h-100 w-auto flex justify-center mx-100 my-20 rounded-2xl ' id="web-container">
            <input type="text" onChange={handlechange} placeholder="Search any country.." className="text-black fixed bg-white rounded-2xl py-2 px-2 my-5 border-b-current" />
        </div>





    </>
);

}

export default NavBar