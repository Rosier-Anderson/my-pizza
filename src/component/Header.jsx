import React from 'react'
import Logo from  "../assets/pizzaLogo.png";
import '../styles/Header.scss';

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
         <a href="/" className='header_nav_link'>Home</a>
       </li>
       <li className='header_nav_list_item'>
         <a href="/menu" className='header_nav_link'>Menu</a>
       </li>
       <li className='header_nav_list_item'>
         <a href="/about" className='header_nav_link'>About Us</a>
       </li>
         <li className='header_nav_list_item'>
             <a href="/contact" className='header_nav_link'>Contact</a>
         </li>
     </ul>
   </nav>
 </header>
  )
}
