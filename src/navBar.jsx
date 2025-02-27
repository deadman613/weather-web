import React from "react";


function NavBar() {
    return (
        <>
            <nav className="nab-bar   flex justify-between  bg-black text-white  h-10  w-full rounded-2xl"> 
            <div><span className="text-white mx-10 py-2 text-xl "> Weather app</span></div>    

            <ul className=" flex  gap-8 my-2">
                <li className=" mx-10 "> Home</li>
                <li className="mx-10">about</li>
            </ul>

                

            </nav>
          




        </>
    );

}
export default NavBar