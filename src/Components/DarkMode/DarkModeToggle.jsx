// DarkModeToggle.js
import React, {useState,useEffect} from 'react'
// import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaRegMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";


const DarkModeToggle = () => {
  const [theme ,setTheme]=useState("dark");
  useEffect(()=>{
    if
    ( theme==="dark"){
     document.documentElement.classList.add("dark");
    }else{
     document.documentElement.classList.remove("dark");
    }
    
  },[theme]);

  const handleThemeSwitch=()=>{
    setTheme(theme=="dark" ? "Light" : "dark")
  }

  

  return (
    <div>
      <button onClick={handleThemeSwitch} className="flex items-center justify-center w-12 h-12 rounded-full  hover:bg-gray-600 focus:outline-none">
    {theme === 'dark' ? (
      <FaRegMoon className="h-6 w-6 text-white" />

    ) : (
      <GoSun className="h-6 w-6 text-yellow-400 hover:text-white" />
    )}
  </button>
    </div>

  );
};

export default DarkModeToggle;
