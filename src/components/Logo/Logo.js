import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from "./brain.jpg";

const Logo = () => {
  return (
    <div className='ml6-l ml4 mv0-l mv3 center'>
      <Tilt
        className='Tilt pa2 br3 ba b--black-10 shadow-5'
        options={{ max: 55 }}
        style={{ height: 150, width: 150 }}
      >
        <img 
          draggable='false' 
          alt='logo' 
          src={brain}
          className="w-100 h-100 object-cover"  
        />
      </Tilt>
    </div>
  );
};

export default Logo;
