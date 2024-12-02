import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from "./brain.jpg";

const Logo = () => {
  return (
    <div className='mv4 ml6-l mv0-l flex-l items-start-l justify-start-l center'>
      <Tilt
        className='Tilt br3 ba b--black-10 shadow-5'
        options={{ max: 55 }}
        style={{ height: 200, width: 200 }}
      >
        <div className='Tilt-inner pa2'>
          <img draggable='false' alt='logo' src={brain}/>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
