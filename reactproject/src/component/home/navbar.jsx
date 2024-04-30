import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
   <div className="nav">
     <div className='container'>
      <div className="nav">
        <div className="logo"><h1>Marketing</h1></div>
        <div className="links">
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                
                
            </ul>
        </div>
      </div>
    </div>
   </div>
  )
}
