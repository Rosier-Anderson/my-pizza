import React from 'react'
import Logo from  "../assets/pizzaLogo.png";
import '../styles/Header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='header'>
    <figure className='
    header_logo_container'>
     <img
       src={Logo}
       alt="Pizza logo"
         className="header_logo"
         width={50}
         height={50}
     
     />
   </figure>
   <nav className='
   header_nav'>
     <ul className='
     header_nav_list'>
       <li className='
       header_nav_list_item'>
         <Link to="/" className='header_nav_link'>Home</Link>
       </li>
       <li className='header_nav_list_item'>
         <Link to="/menu" className='header_nav_link'>Menu</Link>
       </li>
       <li className='header_nav_list_item'>
         <Link to="/about" className='header_nav_link'>About Us</Link>
       </li>
         <li className='header_nav_list_item'>
             <Link to="/contact" className='header_nav_link'>Contact</Link>
         </li>
     </ul>
   </nav>
 </header>
  )
}
