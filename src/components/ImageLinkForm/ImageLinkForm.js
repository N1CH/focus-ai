import React from "react";
import "./ImageLinkForm.css";
import { useLanguage } from "../../context/LanguageContext";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  const { dictionary } = useLanguage();
  return (
    <div style={{userSelect: 'none'}}>
      <p className='f3'>
        {dictionary.description}
      </p>
      <div className="br3 ba b--black-10 w-200 w-50-m w-40-l shadow-5 center">
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
            {dictionary.scanButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
