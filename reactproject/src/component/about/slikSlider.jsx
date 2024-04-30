import React from "react";
import image from "./imag.jpg";

import "./slid.css";

export default function SlikSlider() {
  return (
    <div className="container">
      {/* <div className='all '>
     <div className="img">
        <div><img src={image} alt="" /></div>
      </div>
      <div className="img">
        <div><img src={imag2} alt="" /></div>
      </div>
      <div className="img">
        <div><img src={image3} alt="" /></div>
      </div>
     </div> */}
     <div className="content">
      
     <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        alias commodi porro cupiditate asperiores labore eum, soluta et quasi
        quo praesentium earum iste deleniti saepe qui dolore, reprehenderit illo
        rem!
      </p>
      <img src={image} alt=""  className="Imag_content"/>
     </div>
    </div>
  );
}
