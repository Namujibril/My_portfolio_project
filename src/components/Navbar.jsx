import React, { useContext } from "react";
import Nav from "./Nav";



const Navbar = () => {
  
  return (
    <header
      className='dark:bg-background-color fixed left-0 top-0 z-50 w-full bg-text-color py-3 shadow-md shadow-background-color dark:shadow-md dark:shadow-text-color dark:text-text-color'
    >
      <Nav />
    </header>
  );
};
export default Navbar;


// {`${darkMode && " dark:bg-background-color "}  `}