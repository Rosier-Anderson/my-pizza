import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import '../styles/AboutFooter.scss';
export default function AboutFooter() {
  return (
    <footer className='footer'>
        <a href="#instagram" className="footer__link"><FaSquareInstagram /></a>
        <a href="twitter" className="footer__link"><FaTwitter /></a>
        <a href="facebook" className="footer__link"><FaFacebookSquare /></a>
        <a href="linkden" className="footer__link"><FaLinkedin /></a>
    </footer>
  )
}
