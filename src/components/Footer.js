import React from 'react'
import './footer.css'
import {Link} from 'react-router-dom'
import fb from "../images/footer/fb.png";
import ig from "../images/footer/ig.png";
import yt from "../images/footer/yt.png";
import x from "../images/footer/x.png";
const Footer = () => {
  return (
    
    <footer className="footer">
        <div className='footercontainer'>
       
        <div className="footer-info-left">
         Copyright 2024 Negoteq
        </div>
        <ul className="footer-info-right">
         <li className='item'>
                <Link to='/blog' >
                   <img src={fb} alt=""></img>
                </Link>
          </li>
           <li className='item'>
                <Link to='/blog' >
                    <img src={ig} alt=""></img>
                </Link>
          </li>
           <li className='item'> 
                <Link to='/blog' >
                    <img src={yt} alt=""></img>
                </Link>
          </li> 
           <li className='item'>
                <Link to='/blog' >
                    <img src={x} alt=""></img>
                </Link>
          </li>
        </ul>
        
        </div>
        
      </footer>
    
    );
  
}

export default Footer