import '../index.css';
import awss from '../images/awss.jpg';
import React from "react";

function NavBar() {
  return <div className="navbar">
    <div className='left'>
        <img className='aws-image' src={awss} alt='sample'/>
    </div>
    <div className='right-section'>
        <div>
        <img className='aws-image' src={awss} alt='sample'/>
        </div>
        <div>
        <img className='aws-image1' src={awss} alt='sample'/>    
        </div>
    </div>

  </div>; 
}

export default NavBar;
