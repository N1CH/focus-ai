import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3'>
        FocusAI will detect the face in your pictures. Give it a try!
      </p>
      <div className='center'>
        <div className='form center pa4 b--black-40 shadow-8'>
          <input
            className='f4 pa2 center w-75'
            type='text'
            onChange={onInputChange}
          ></input>
          <button
            className='b ph4 pv3 input-reset ba b--black bg-transparent grow pointer f4 dib'
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
