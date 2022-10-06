import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import { Bars4Icon, XMarkIcon} from '@heroicons/react/24/solid'
const Header = () => {
    const [open,setOpen]=useState(false);
    return (
        <div className='bg-purple-300 py-5'>
       <div onClick={()=>setOpen(!open)} className="h-8 w-8  md:hidden">
            {
              open?  <XMarkIcon/> : <Bars4Icon /> 
            
            }
         
            </div>   
            
            <ul className={`header  md:flex justify-center absolute  bg-purple-300 w-full md:static duration-500 ease-in-out ${open ? 'top-12': 'top-[-120px]'}`}>
        
            <li><NavLink to='/home'>Home</NavLink></li>
           <li> <NavLink to='/restaurent'>Restaurent</NavLink></li>
           <li> <NavLink to='/blog'>Blog</NavLink></li>
           <li> <NavLink to='/about'>About</NavLink></li>
           </ul>
        </div>
    );
};

export default Header;